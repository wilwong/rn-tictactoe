import React, { useReducer, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Paragraph } from 'react-native-paper'
import Circle from '@components/icons/circle'
import Cross from '@components/icons/cross'

import GameContext, { defaultContext } from '@contexts/gameContexts';

import Grid from './grid.js'

import Layout from '@constants/layout'
import Colors from '@constants/colors'
import CommonStyles from '@constants/commonStyles'


export default (props)=> {

  //Create the game and user states and fill them into the context
  const [gameState, dispatch] = useReducer( defaultContext.gameStateReducer, defaultContext.gameState)
  const [playerState, togglePlayerState] = useState(defaultContext.player)
  defaultContext.gameState = gameState
  defaultContext.gameStateDispatch = dispatch
  defaultContext.player = playerState
  defaultContext.togglePlayer = ()=>{
    togglePlayerState(playerState*-1)
  }

  const PlayerIcon = playerState > 0 ? Circle : Cross

  return (
    <GameContext.Provider value={defaultContext}>
      <View>
        <Grid />
        {  gameState == 0 &&
          <View style={[CommonStyles.row, styles.displayView]}>
            <PlayerIcon style={{width:Layout.baseFontSize*2.5}}/>
            <Paragraph style={styles.displayText}> 's Turn </Paragraph>
          </View>
        }
        {  gameState == 1 &&
          <View style={[CommonStyles.row, styles.displayView]}>
            <Circle style={{width:Layout.baseFontSize*2.5}}/>
            <Paragraph style={styles.displayText}> Won!</Paragraph>
          </View>
        }
        {  gameState == -1 &&
          <View style={[CommonStyles.row, styles.displayView]}>
            <Cross style={{width:Layout.baseFontSize*2.5}}/>
            <Paragraph style={styles.displayText}> Won!</Paragraph>
          </View>
        }
        {  gameState == 2 &&
          <View style={[CommonStyles.row, styles.displayView]}>
            <Paragraph style={styles.displayText}> It's a TIE!</Paragraph>
          </View>
        }
      </View>
    </GameContext.Provider>
  )
}

const styles = StyleSheet.create({
  displayView:{
    marginTop: Layout.marginSize * 2,
    height: Layout.baseFontSize*2
  },
  displayText:{
    fontSize : Layout.baseFontSize * 2,
    color: Colors.text
  }
})
