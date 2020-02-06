import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default (props) => {
  return (
    <View style={styles.container}>
      <Headline style={styles.headline}>Tic-Tac-T.O.</Headline>
      <Button 
      	mode="contained" 
      	color="white"
      	onPress={() => props.navigation.navigate('Game')}>
      	VS Computer
      </Button>
      <Button 
      	mode="contained" 
      	color="white"
      	onPress={() => props.navigation.navigate('Game')}>
      	2 Players
      </Button>
      <Button 
      	mode="contained" 
      	color="white"
      	onPress={() => props.navigation.navigate('Settings')}>
      	Settings
      </Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c51162',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
  	color: '#fff'
  }
});