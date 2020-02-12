import React, { useReducer, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import GameContext,{defaultContext} from '@contexts/gameContexts';


import Square from './square.js';

import Layout from '@constants/layout';
import CommonStyles from '@constants/commonStyles';


export default (props)=> {
  const [state, dispatch] = useReducer(defaultContext.gameStateReducer,defaultContext.gameState)
  defaultContext.gameStateDispatch = dispatch
  
  return (
    <GameContext.Provider value={defaultContext}>
      <View style={ CommonStyles.container }>
        {defaultContext.board.map((rol,i)=>{
          return(
            <View style={CommonStyles.row} key={i}>
              {defaultContext.board[i].map((item,j)=>{
                return(
                  <Square key={j} row={i} col={j} />
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

