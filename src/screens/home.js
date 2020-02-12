import React from 'react'

import { StyleSheet, View } from 'react-native'
import { Headline } from 'react-native-paper'
import { Button } from 'react-native-paper'

import CommonStyles from '@constants/commonStyles'
import Colors from '@constants/colors'
import Layout from '@constants/layout'

export default (props) => {
  return (
    <View style={[CommonStyles.container, CommonStyles.pinkBackground]}>
      <Headline style={styles.headline}> Tic-Tac-T.O. </Headline>
      <Button 
        style={styles.button}
        mode="contained" 
        disabled
        color="white"
        onPress={() => props.navigation.navigate('Game')}>
        VS Computer
      </Button>
      <Button
        style={styles.button}
        mode="contained" 
        color="white"
        onPress={() => props.navigation.navigate('Game')}>
        2 Players
      </Button>
      <Button 
        style={styles.button}
        mode="contained" 
        color="white"
        onPress={() => props.navigation.navigate('Settings')}>
        Settings
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
