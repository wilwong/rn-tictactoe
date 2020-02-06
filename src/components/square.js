import React, {useContext, useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native';

import circle from '@assets/circle.svg';
import cross from '@assets/cross.svg';

import GameContext from '@contexts/gameContexts.js';

import Layout from '@constants/layout.js';

export default function Square(props) {
	const gameContext= useContext(GameContext);
  const [squareStatus, setSquareStatus] = useState(gameContext.board[props.row][props.col]);
  if(squareStatus===0){
  	return (
      <View style={styles.item}>
      	<TouchableOpacity style={styles.button}
        		onPress={()=>{gameContext.placeMove(props.row, props.col, setSquareStatus)}}>
            <View style={styles.button}></View>
      	</TouchableOpacity>
      </View>
  	)
  }else if(squareStatus<0){
    return(
      <View style={styles.item}>
        <Image source={cross} style={styles.button}/>
      </View>
    )
  }else{
    return(
      <View style={styles.item}>
        <Image source={circle} style={styles.button}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button:{
    width: '70%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    width: Layout.width/3,
    height: Layout.width/3,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderWidth :1,
    borderColor: 'black',
  },
  emptyButton:{
    width: Layout.width/3,
    height: Layout.width/3,
    backgroundColor: 'red',
    borderWidth :1,
    borderColor: 'black',
  }
});