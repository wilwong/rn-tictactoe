import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';

import circle from '../assets/circle.svg';
import cross from '../assets/cross.svg';

import GameContext from '../context/gameContexts.js';

import Layout from '../constants/layout.js';

export default function Square(props) {
	const gameContext= useContext(GameContext);
  const [playerStatus, setPlayerStatus] = useState(gameContext.playerStatus);
  console.log("Square Rerendered");
  console.log(">>Player Status: ", playerStatus);
	return (
    <View>
    	<TouchableOpacity style={styles.button}
      		onPress={()=>{gameContext.togglePlayer(setPlayerStatus)}}>
          <Text>Press</Text>
    	</TouchableOpacity>
    </View>
	)
}
const styles = StyleSheet.create({
  button:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});