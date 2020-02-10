import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import GameContext,{defaultContext} from '@contexts/gameContexts'

import Layout from '@constants/layout'

export default (props) => {
	const gameContext = useContext(GameContext);
	return(
		<View style={ Layout.styles.container }>
			{gameContext.gameState==1 && <Text>X wins</Text>}
			{gameContext.gameState==-1 && <Text>O wins</Text>}
			{gameContext.state==2 && <Text>You Tied</Text>}
			<TouchableOpacity onPress={()=>{
				gameContext.gameStateDispatch({type:'reset'})
				props.navigation.navigate('game')
			}}>
			<Text>Reset</Text>
			</TouchableOpacity>
		</View>
	)
}