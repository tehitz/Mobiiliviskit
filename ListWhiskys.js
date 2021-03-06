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
	static navigationOptions = {title: 'Listed whiskies'}
	constructor(props) {
		super(props);
		this.itemsRef = firebaseApp.database().ref('whiskys');
		this.state = {
			name: '', desc: '', price: '', whiskys: [], modalVisible: false, rating: '', screenHeight: 0
		};
	}


	keyExtractor = (item) => item.id;

	handleRemove(id) {
		return firebase.database().ref('whiskys').child(id).remove();
	}


	renderItem = ({item}) =>

		<ScrollView
			style={{fontSize: 15, paddingBottom: 10, marginHorizontal: 40}}>
			<Text> Name: {item.name}</Text>
			<Text> Description: {item.desc}</Text>
			<Text> Price: {item.price}</Text>
			<Text> Rating: {item.rating}/5</Text>
			<Button onPress={() => this.handleRemove(item.id).then(alert('Whisky removed'))} title="Delete"/>
		</ScrollView>;


	listenForItems(itemsRef) {
		itemsRef.on('value', (snap) => {
			var items = [];
			snap.forEach((child) => {
				items.push({
					id: child.key,
					desc: child.val().desc,
					price: child.val().price,
					name: child.val().name,
					rating: child.val().rating,
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
			<View style= {{backgroundColor: 'white', paddingBottom: 10, flex: 1}}>
				<Text style = {{marginTop: 40,
					marginBottom: 10,
					fontFamily: 'Helvetica',
					fontSize: 36,
					fontWeight: 'bold',
					textAlign: 'center'}}>Whiskies added</Text>
							<FlatList style={{width: window.width}}
								data = {this.state.whiskys}
								keyExtractor = {this.keyExtractor}
								renderItem = {this.renderItem}
							/>
			</View>
		);
	}
}
