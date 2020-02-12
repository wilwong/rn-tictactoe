import React from 'react'
import { View, StyleSheet } from 'react-native'

import BackToHomeButton from '@components/backToHome'
import TicTacTo from '@components/tictacto'

import CommonStyles from '@constants/commonStyles'
import Layout from '@constants/layout'

export default (props) => {
  return (
    <View style={[CommonStyles.container, CommonStyles.pinkBackground]}>
      <TicTacTo/>
      <BackToHomeButton />
    </View>
  );
}

const styles = StyleSheet.create({
  tictacto:{
    position: 'absolute',
    top:0,
    left:0
  }
})
