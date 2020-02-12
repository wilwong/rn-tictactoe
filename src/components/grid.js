import React, { useReducer, useContext } from 'react';
import { StyleSheet, View, Image } from 'react-native'

import GameContext from '@contexts/gameContexts'

import gridImage from '@assets/grid.png'

import Square from './square.js'

import Layout from '@constants/layout'
import CommonStyles from '@constants/commonStyles'


export default (props)=> {
  const gameContext = useContext(GameContext)
  return (
    <View style={ styles.fixedWidthSquare }>
      <Image source={gridImage} style={[styles.fixedWidthSquare, styles.absoluteAlignTopCorner]}/>
      <View style={[styles.fixedWidthSquare, styles.absoluteAlignTopCorner]}>
        {gameContext.board.map((rol,i)=>{
          return(
            <View style={CommonStyles.row} key={i}>
              {gameContext.board[i].map((item,j)=>{
                return(
                  <Square key={j} row={i} col={j} />
                )
              })}
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fixedWidthSquare:{
    width: Layout.innerWidth,
    height: Layout.innerWidth,
    position: 'relative'
  },
  absoluteAlignTopCorner :{
    position : 'absolute',
    top: 0,
    left:0,
  }
});
