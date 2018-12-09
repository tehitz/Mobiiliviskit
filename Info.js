import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, TextInput, FlatList} from 'react-native';

export default class Info extends React.Component {
	static navigationOptions = {title: 'Info'}
	constructor(props) {
		super(props);
	}


	render() {
		return(
			<View styles={{alignItems: 'center', margin: 'auto'}}>
				<Text styles={{fontSize: 20}}>This is a whiskey listing app.</Text>
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