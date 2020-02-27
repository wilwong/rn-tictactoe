import React, { useReducer, useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Paragraph, Button } from 'react-native-paper'

// import context and the defaults aswell
import GameContext, { defaultContext } from '@contexts/gameContexts'

// Assets
import TadaSound from '@utils/tadaSound'

// import components
import Grid from './grid.js'
import Circle from '@components/icons/circle'
import Cross from '@components/icons/cross'

// import other constant values
import Layout from '@constants/layout'
import Colors from '@constants/colors'
import CommonStyles from '@constants/commonStyles'

export default (props)=> {
  console.log(props)
  //Create the game and user states and fill them into the context
  const [gameState, dispatch] = useReducer( defaultContext.gameStateReducer, defaultContext.gameState)
  const [playerState, togglePlayerState] = useState(defaultContext.player)
  const [gameKey, nextGame] = useState(0)
  defaultContext.gameState = gameState
  defaultContext.gameStateDispatch = dispatch
  defaultContext.player = playerState
  defaultContext.togglePlayer = ()=>{
    togglePlayerState(playerState*-1)
  }

  // equivalent to componentDidMount
  useEffect( () => { TadaSound.loadSound() }, [])

  // equivalent to componentDidUpdate
  // and runs only if gameState is changed
  useEffect( () => {
    if(gameState!==0) TadaSound.playSound()
  },
    [gameState],
  )

  // conditional component
  const PlayerIcon = playerState > 0 ? Circle : Cross

  return (
    <GameContext.Provider value={defaultContext}>
      <Grid key={gameKey} disabled={gameState!==0}/>
      { //inline conditional rendering, 0 for continue
        // 1/-1 if a player won, 2 for ties
         gameState == 0 && 
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
      <View style={[CommonStyles.row, styles.displayView]}>
        { //if game ended, render reset button
          gameState!==0 &&
          <Button 
            mode="contained" 
            color="white"
            onPress={()=>{
              dispatch({type:'reset'})
              nextGame(gameKey+1)
            }}>
            Play Again
          </Button>
        }
      </View>
    </GameContext.Provider>
  )
}

const styles = StyleSheet.create({
  displayView:{
    marginTop: Layout.marginSize * 2,
    height: Layout.baseFontSize*3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayText:{
    fontSize : Layout.baseFontSize * 2,
    lineHeight : Layout.baseFontSize * 2,
    color: Colors.text
  }
})
