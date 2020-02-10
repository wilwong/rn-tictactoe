import React, { useReducer } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import GameContext,{defaultContext} from '../context/gameContexts.js';

import Layout from '../constants/layout.js';
import Square from './square.js';
import ReduxSquare from './reduxSquare';

export default function Grid() {
  const [state, dispatch] = useReducer(defaultContext.gameStateReducer,defaultContext.gameState);
  defaultContext.gameStateDispatch = dispatch

  if(state!=0){
    return(
      <View style={styles.container}>
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
        <View style={styles.container}>
          {defaultContext.board.map((rol,i)=>{
            return(
              <View style={styles.row} key={i}>
                {defaultContext.board[i].map((item,j)=>{
                  if(i==0&&j==0){
                    return(
                      <ReduxSquare key={j} row={i} col={j} />
                    )
                  }else{
                    return(
                      <Square key={j} row={i} col={j} />
                    )
                  }
                  
                })}
              </View>
            )
          })}
        </View>
      </GameContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    height: Layout.width / 3,
    width: '100%',
    display: 'flex',
    flexDirection:'row',
  }
});
