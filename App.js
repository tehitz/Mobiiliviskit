
import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, TextInput, FlatList} from 'react-native';
import { createBottomTabNavigator,  createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import Info from './Info';
import ListWhiskys from './ListWhiskys';
import Ionicons  from 'react-native-vector-icons/Ionicons'


export default class App extends React.Component {

	render() {
		return( <MyApp/> );
	}
}

const MainNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
		tabBarLabel: 'Home',
		tabBarIcon: ({tintColor}) => (
			<Ionicons name="ios-home" color={tintColor} size={24} />
		)

		}},
	Information: {
		screen: Info,
		navigationOptions: {
		tabBarLabel: 'Information',
		tabBarIcon: ({tintColor}) => (
			<Ionicons name="ios-information-circle-outline" color={tintColor} size={24}/>
		)
	}},
	Whiskies: {
		screen: ListWhiskys,
		navigationOptions: {
			tabBarLabel: 'Listed Whiskies',
			tabBarIcon: ({tintColor}) => (
				<Ionicons name="md-wine" color={tintColor} size={24}/>
			)
		}}
});
const MyApp = createAppContainer(MainNavigator);