
import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, TextInput, FlatList} from 'react-native';
import { createBottomTabNavigator,  createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import Yhteystiedot from './Yhteystiedot';
import ListWhiskys from './ListWhiskys';


export default class App extends React.Component {

	render() {
		return( <MyApp/> );
	}
}

const MainNavigator = createBottomTabNavigator({
	Home: {screen: HomeScreen},
	Yhteystiedot: {screen: Yhteystiedot},
	Whiskys: {screen: ListWhiskys}
});
const MyApp = createAppContainer(MainNavigator);