import React from 'react'

import { StyleSheet, View } from 'react-native'
import { Headline } from 'react-native-paper'
import { Button } from 'react-native-paper'

import CommonStyles from '@constants/commonStyles'
import Colors from '@constants/colors'
import Layout from '@constants/layout'

export default (props) => {
  const {navigation} = props
  return (
    <View style={[CommonStyles.container, CommonStyles.pinkBackground]}>
      <Headline style={styles.headline}> Tic-Tac-TO </Headline>
      <Button 
        style={styles.button}
        mode="contained" 
        color="white"
        onPress={() => navigation.navigate('Game', {useAI:true})}>
        VS Computer
      </Button>
      <Button
        style={styles.button}
        mode="contained" 
        color="white"
        onPress={() => navigation.navigate('Game')}>
        2 Players
      </Button>
      <Button 
        style={[styles.button, {marginTop:Layout.marginSize *5}]}
        color="white"
        onPress={() => navigation.navigate('About')}>
        About this App
      </Button>
    </View>
  )
}


const styles = StyleSheet.create({
  headline: {
    color: Colors.text,
    fontSize: Layout.baseFontSize * 2.5,
    lineHeight: Layout.baseFontSize * 2.5,
    marginBottom: Layout.marginSize
  },
  button:{
    width: '50%',
    marginTop: Layout.marginSize / 2,
    marginBottom: Layout.marginSize / 2
  }
});
