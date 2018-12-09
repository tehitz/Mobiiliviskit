import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, TextInput, FlatList, TouchableOpacity, Linking } from 'react-native';

export default class Info extends React.Component {
	static navigationOptions = {title: 'Info'}
	constructor(props) {
		super(props);
	}


	render() {
		return(
			//https://image.flaticon.com/icons/png/512/25/25231.png
			<View style={{flex: 1}}>
			<View style={{paddingTop: 40, alignItems: 'center', flex: 1}}>
				<Text style={{fontFamily: 'Helvetica',
					fontSize: 36,
					fontWeight: 'bold',
					textAlign: 'center'}}>Welcome to my whisky app!</Text>
				<View style={{marginTop: 50, flex: 2, textAlign: 'center', alignItems: 'center'}}>
				<Text style={{fontSize: 15}}>This is a school project for mobile programming</Text>
				<Text style={{fontSize: 15}}>Please do enjoy your stay!</Text>
				<Text> </Text>
					<Text> </Text>
				<Text>Feel free to add whiskies and give </Text>
				<Text>them some sort of description.</Text>
				<Text>Whiskies are saved to a database so </Text>
				<Text>everyone using the app can see them</Text>
				</View>
			</View>

				<View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20}}>
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Text style={{fontSize: 24, padding: 20}}>Check my media!</Text>
					</View>
					<View style={{flexDirection: 'row', paddingHorizontal: 20}}>
						<TouchableOpacity activeOpacity={0.5}
										  style={{ paddingHorizontal: 20}}
										  onPress={() => Linking.openURL('https://www.linkedin.com/in/santeri-siiril%C3%A4-99a54714a/')}>
							<Image style={{width: 70, height: 70, marginBottom: 20}}
								   source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'}}/>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.5}
										  style={{ paddingHorizontal: 20}}
										  onPress={() => Linking.openURL('https://www.github.com/tehitz/')}>
						<Image style={{width: 70, height: 70, marginBottom: 20}}
							   source={{uri: 'https://image.flaticon.com/icons/png/512/25/25231.png'}}/>
					</TouchableOpacity>
					</View>
				</View>
			</View>

		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});