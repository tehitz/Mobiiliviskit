import React from 'react';
import { StyleSheet, Text, TextInput, Button, FlatList, Modal, View } from 'react-native';
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
		<View >
			<Text style={{fontSize: 20}}>{item.name}, {item.desc}, {item.date}</Text>
		</View>;

	listenForItems(itemsRef) {
		itemsRef.on('value', (snap) => {
			var items = [];
			snap.forEach((child) => {
				items.push({
					id: child.key,
					desc: child.val().desc,
					date: child.val().price,
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
			<View>
				<Text>All added whiskys</Text>
				<View style= {{width: 300, height: 300, backgroundColor: 'white', alignItems: 'center'}}>
					<Text>Whiskeys added</Text>
					<FlatList
						data = {this.state.whiskys}
						keyExtractor = {this.keyExtractor}
						renderItem = {this.renderItem}
						style={{marginTop: 20}}
					/>
				</View>
			</View>

		);
	}

}