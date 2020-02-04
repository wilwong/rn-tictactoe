import React, {useContext} from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Image } from 'react-native';

import GameContext from '../context/gameContexts.js';

import Layout from '../constants/layout.js';

export default function Square() {
	const gameContext= useContext(GameContext);
	console.log(gameContext);
  	return (
	    <View style={styles.item}>
	    	<TouchableOpacity 
	      		onPress={()=>{gameContext.togglePlayer()}}>
	      	<Text>Press me</Text>
	    	</TouchableOpacity>
	  	</View>
  	)
}
const styles = StyleSheet.create({
  item:{
    width: Layout.width/3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth :1,
    borderColor: 'black',
    position: 'relative'
  }
});