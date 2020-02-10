import React, { useReducer, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import GameContext,{defaultContext} from '@contexts/gameContexts';

import Layout from '@constants/layout';
import Square from './squareClass.js';

export default (props)=> {
  const [state, dispatch] = useReducer(defaultContext.gameStateReducer,defaultContext.gameState)
  defaultContext.gameStateDispatch = dispatch
  
  const squareRef = []
  let i = 0
  for(i;i<9;i++){
    squareRef[i] = useRef(null)
  }


  return (
    <GameContext.Provider value={defaultContext}>
      <View style={ Layout.styles.container }>
        {defaultContext.board.map((rol,i)=>{
          return(
            <View style={Layout.styles.row} key={i}>
              {defaultContext.board[i].map((item,j)=>{
                return(
                  <Square key={j} row={i} col={j} ref={squareRef[(i*3)+j]}/>
                )
              })}
            </View>
          )
        })}
      </View>
      <View >
      {state!==0 &&
        <TouchableOpacity onPress={()=>{
          dispatch({type:'reset'})
          props.navigation.navigate('Home')
        }}>
          <Text>Reset</Text>
        </TouchableOpacity>
      }
      <TouchableOpacity style={{height:30}} onPress={()=>{
          console.log(squareRef[0])
        }}>
          <Text>Square Refs</Text>
      </TouchableOpacity>
      </View>
      
    </GameContext.Provider>
  )

}

