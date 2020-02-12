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
      <BackToHomeButton style={styles.button}/>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    position: 'absolute',
    top:0,
    left:0,
    marginHorizontal: Layout.marginSize,
    marginVertical: Layout.marginSize / 2
  },
  tictacto:{
    position: 'absolute',
    top:0,
    left:0
  }
})
