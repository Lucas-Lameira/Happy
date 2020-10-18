import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import {Feather} from '@expo/vector-icons'
import local from '../images/Local.png';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}


function OrphanagesMap() {
	const navigation = useNavigation()
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useFocusEffect(()=>{
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  })

  function handleNavigateToOrphanageDetails(id: number){
		navigation.navigate('OrphanageDetails', {id})
  }
  
  function navigateToCreateOrphanage () {
    navigation.navigate('selectMapPosition')
  }


  return(
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude: -1.31072,
          longitude: -48.480256,
          latitudeDelta: 0.008 ,
          longitudeDelta: 0.008,
        }}
      >
        {
          orphanages.map(orphanage => {
            return(
              <Marker 
              key={orphanage.id}
                calloutAnchor={{
                  x: 2.7,
                  y: 0.8,
                }}
                icon={local}
                coordinate={{
                  latitude: orphanage.latitude,
                  longitude: orphanage.longitude,
                }}
              >
                <Callout tooltip onPress={ ()=> handleNavigateToOrphanageDetails(orphanage.id)}>
                  <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>
                      {orphanage.name }
                    </Text>
                  </View>
                </Callout>
              </Marker>
            );
          })
        }
      </MapView>

      <View style={styles.footer}>
          <Text style={styles.footerText}>
            {orphanages.length} orphanatos encontrados 
          </Text>
          <RectButton style={styles.createOrphanageBtn} onPress={navigateToCreateOrphanage}>
            <Feather name="plus" size={20} color="#FFF" />
          </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, /* padrao alinhamento column, verticla */ /* na web é row, horizontal */
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',    
  },

  calloutText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5',
    fontSize: 14,
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2, /* sombreamento, funciona no android */
  },

  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold',
  },

  createOrphanageBtn: {
    width: 56,
    height:56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  } 
});


export default OrphanagesMap;

