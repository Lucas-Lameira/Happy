import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


interface HeaderProps {
	title: string;
	showCancel?: boolean
}

function Header({title, showCancel = true}: HeaderProps) {
	const navigation = useNavigation();

	function goBackToHome () {
		navigation.navigate('OrphanagesMap');
	}

    return(
        <View style={styles.container}>

					<BorderlessButton onPress={navigation.goBack}>
						<Feather name="arrow-left" size={24} color="#15b6d6"/>
					</BorderlessButton>

					<Text>{title}</Text>

					{
						showCancel? (
							<BorderlessButton onPress={goBackToHome}>
								<Feather name="x" size={24} color="#ff669d"/>
							</BorderlessButton>
						): (
							<View />
						)
					}
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
			padding: 24,
			backgroundColor: '#f9Fafc',
			borderBottomWidth: 1,
			borderColor: '#ddf3f0',
			paddingTop: 44,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center'	
    },
		title: {
			fontFamily: 'Nunito_600SemiBold',
			color: '#8fa7b3',
			fontSize: 16,
		},

})