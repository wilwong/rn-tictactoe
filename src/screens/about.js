import React from 'react'
import { StyleSheet, View, Linking } from 'react-native'
import { Paragraph, Title, Button } from 'react-native-paper'

import BackToHomeButton from '@components/backToHome'

import CommonStyles from '@constants/commonStyles'
import Layout from '@constants/layout'
import Colors from '@constants/colors'

export default (props) => {
  return (
    <View style={[CommonStyles.container, CommonStyles.pinkBackground]}>
      <BackToHomeButton />
      <Title style={{color: Colors.text, marginBottom: Layout.marginSize *2}}>
        TicTacTO v1
      </Title>
      <Paragraph style={styles.textContainer}>
        Just a little app to demonstrate how to use React Native hooks. i.e, useState, useContext, useReducer, etc.
      </Paragraph>
      <Paragraph style={[styles.textContainer, {textAlign:'center'}]}>
        You can view the code here on :
      </Paragraph>
      <Button
        color="white"
        onPress={() => Linking.openURL('https://github.com/wilwong/rn-tictactoe')}>
        Github
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer:{
    width: Layout.width * 0.6,
    color: Colors.text,
    marginBottom: Layout.marginSize 
  }
})
