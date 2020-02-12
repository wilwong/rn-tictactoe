import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Paragraph, Title } from 'react-native-paper'

import BackToHomeButton from '@components/backToHome'

import CommonStyles from '@constants/commonStyles'
import Layout from '@constants/layout'
import Colors from '@constants/colors'

export default (props) => {
  return (
    <View style={[CommonStyles.container, CommonStyles.pinkBackground]}>
      <BackToHomeButton style={styles.button}/>
      <Title style={{color: Colors.text}}>Settings Screen</Title>
      <Paragraph style={{color: Colors.text}}>TicTacTO v1</Paragraph>
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
  }
})
