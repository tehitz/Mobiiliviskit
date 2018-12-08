import React from 'react';
import { ScrollView, StyleSheet, Alert, Text, TextInput, Button, FlatList, Modal, View } from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAdetXv2jpJDHQnzvvTDab_ZDUcXgTuUHA",
	authDomain: "viskit-1550c.firebaseapp.com",
	databaseURL: "https://viskit-1550c.firebaseio.com",
	projectId: "viskit-1550c",
	storageBucket: "viskit-1550c.appspot.com",
	messagingSenderId: "323741107517"
};

if (!firebase.apps.length) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
}

export default class ListWhiskys extends React.Component {
	static navigationOptions = {title: 'Listed whiskys'}
	constructor(props) {
		super(props);
		this.itemsRef = firebaseApp.database().ref('whiskys');
		this.state = {
			name: '', desc: '', price: '', whiskys: [], modalVisible: false
		};
	}

	keyExtractor = (item) => item.id;

	renderItem = ({item}) =>
		<ScrollView style={{fontSize: 15, marginBottom: 20, justifyContent: 'center'}}>
			<Text> Name: {item.name}</Text>
			<Text> Description: {item.desc}</Text>
			<Text> Price: {item.price}</Text>
		</ScrollView>;

	listenForItems(itemsRef) {
		itemsRef.on('value', (snap) => {
			var items = [];
			snap.forEach((child) => {
				items.push({
					id: child.key,
					desc: child.val().desc,
					price: child.val().price,
					name: child.val().name
				});
			});

			this.setState({whiskys: items});
		});
	}

	componentDidMount() {
		this.listenForItems(this.itemsRef);
	}


	render() {
		return(
			<View style= {{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
				<Text style = {{marginTop: 10,
					marginBottom: 10,
					fontFamily: 'Helvetica',
					fontSize: 36,
					fontWeight: 'bold',
					textAlign: 'center'}}>Whiskys added</Text>
				<View>
					<View style={{flex:7}}>
							<FlatList
								data = {this.state.whiskys}
								keyExtractor = {this.keyExtractor}
								renderItem = {this.renderItem}
							/>
					</View>
				</View>
			</View>
		);
	}
}
