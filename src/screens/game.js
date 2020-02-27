import React from 'react'
import { View, StyleSheet } from 'react-native'

import BackToHomeButton from '@components/backToHome'
import TicTacTo from '@components/tictacto'

import CommonStyles from '@constants/commonStyles'
import Layout from '@constants/layout'

export default (props) => {
  const {route} = props
  const useAI = route.params && route.params.useAI ? route.params.useAI : false
  return (
    <View style={[CommonStyles.container, CommonStyles.pinkBackground]}>
      <TicTacTo useAI={useAI}/>
      <BackToHomeButton />
    </View>
  )
}
