import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import {Feather} from '@expo/vector-icons'
import local from '../images/Local.png';
import { useNavigation } from '@react-navigation/native';

function OrphanagesMap() {
	const navigation = useNavigation()
	function handleNavigateToOrphanageDetails(){
		navigation.navigate('OrphanageDetails')
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
        <Marker 
        calloutAnchor={{
          x: 2.7,
          y: 0.8,
        }}
          icon={local}
          coordinate={{
            latitude: -1.31072,
            longitude: -48.480256,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Nome do Orphanato</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
          <Text style={styles.footerText}>
            ? orphanatos encontrados
          </Text>
          <TouchableOpacity style={styles.createOrphanageBtn} onPress={()=>{}}>
            <Feather name="plus" size={20} color="#FFF" />
          </TouchableOpacity>
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

