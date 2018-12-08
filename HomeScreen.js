import React from 'react';
import { StyleSheet, Text, TextInput, Button, FlatList, Modal, View } from 'react-native';
import * as firebase from 'firebase';
import ListWhiskys from './ListWhiskys';

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

export default class HomeScreen extends React.Component {


	static navigationOptions = {title: 'Add a whisky'};


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



	saveData = () => {
		if (this.state.desc != '' && this.state.price != '' && this.state.name != '') {
			this.itemsRef.push({ desc: this.state.desc, price: this.state.price, name: this.state.name});
			this.refs.show('Whisky saved');
			this.setState({name: '', price: '', desc: '', modalVisible: false});
		}
		else {
			this.refs.show('Some data is missing');
		}
	};

	// List whiskys
	/* listenForItems(itemsRef) {
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
	} */

	render() {
		const {navigate} = this.props.navigation;

		return (
			<View style={{alignItems: 'center', margin: 'auto', justifyContent: 'center', flex: 1}} >
				<Text style={{fontSize: 20}}>Add a new whisky</Text>

				<TextInput
					style={{height: 40, width: 200, borderColor: 'gray',
						borderWidth: 1, marginBottom: 7}}
					onChangeText={(name) => this.setState({name})}
					value={this.state.name}
					placeholder="name"
				/>
				<TextInput
					style={{height: 40, width: 200, borderColor: 'gray',
						borderWidth: 1, marginBottom: 7}}
					onChangeText={(desc) => this.setState({desc})}
					value={this.state.desc}
					placeholder="description"
				/>
				<TextInput
					style={{height: 40, width: 200, borderColor: 'gray',
						borderWidth: 1, marginBottom: 7}}
					onChangeText={(price) => this.setState({price})}
					value={this.state.price}
					placeholder="price"
				/>
				<Button color="red" title="Save a whiskey" onPress={this.saveData}
				/>
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


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	Text: {
		fontSize: 30,

	}
});

//AppRegistry.registerComponent('HomeScreen', () => HomeScreen);

