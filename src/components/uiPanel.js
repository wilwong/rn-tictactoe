import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Paragraph } from 'react-native-paper'
import Circle from '@components/icons/circle'
import Cross from '@components/icons/cross'

import GameContext from '@contexts/gameContexts';


import Layout from '@constants/layout'
import Colors from '@constants/colors'
import CommonStyles from '@constants/commonStyles'


export default (props)=> {

  const gameContext = useContext( GameContext )

  const PlayerIcon = gameContext.player > 0 ? Circle : Cross

  return (
    <View style={[CommonStyles.row, styles.displayView]}>
      <PlayerIcon />
      <Paragraph style={styles.displayText}> 's Turn </Paragraph>
    </View>
  )
}

const styles = StyleSheet.create({
  displayView:{
    marginTop: Layout.marginSize * 2
  },
  displayText:{
    fontSize : Layout.baseFontSize * 2,
    color: Colors.text
  }
})
