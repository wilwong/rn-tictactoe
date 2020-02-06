import React, { useReducer, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import GameContext,{defaultContext} from '@contexts/gameContexts';

import Layout from '@constants/layout';
import Square from './square.js';

export default function Grid() {
  const [state, dispatch] = useReducer(defaultContext.gameStateReducer,defaultContext.gameState);
  defaultContext.gameStateDispatch = dispatch
  
  const squareRef = new Array(9)
  squareRef.forEach((item,i)=>useRef(null))

  if(state!=0){
    return(
      <View style={ Layout.styles.container }>
        {state==1 && <Text>X wins</Text>}
        {state==-1 && <Text>O wins</Text>}
        {state==2 && <Text>You Tied</Text>}
        <TouchableOpacity onPress={()=>dispatch({type:'reset'})}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    )
  }else{
    return (
      <GameContext.Provider value={defaultContext}>
        <View style={ Layout.styles.container }>
          {defaultContext.board.map((rol,i)=>{
            return(
              <View style={Layout.styles.row} key={i}>
                {defaultContext.board[i].map((item,j)=>{
                  return(
                    <Square key={j} row={i} col={j} ref={squareRef[i*j]}/>
                  )
                })}
              </View>
            )
          })}
        </View>
        <View >
          <TouchableOpacity onPress={()=>dispatch({type:'reset'})}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      </GameContext.Provider>
    )
  }
}

