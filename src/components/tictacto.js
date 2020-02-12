import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import GameContext, { defaultContext } from '@contexts/gameContexts';

import Grid from './grid.js'
import Square from './square.js';

// import Layout from '@constants/layout';
// import CommonStyles from '@constants/commonStyles';


export default (props)=> {
  
  return (
    <GameContext.Provider value={defaultContext}>
      <Grid />
    </GameContext.Provider>
  )

}

