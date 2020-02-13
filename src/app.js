import React from 'react'

// Components and HOCs from feature libraries
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as PaperProvider } from 'react-native-paper';

// Basic react native comps
import { StyleSheet, View } from 'react-native';

// Screens comps of this app
import HomeScreen from '@screens/home'
import GameScreen from '@screens/game'
import AboutScreen from '@screens/about'

// Theme config for React Native Paper
import theme from '@constants/paperTheme'


// React Navigator setup
const NavigatorConfigs = {
  initialRouteName:'Home',
  headerMode: 'none',
}

// React Navigator router setup
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Game: {
    screen: GameScreen,
  },
  About:{
    screen: AboutScreen,
  }
}, NavigatorConfigs);


const AppContainer = createAppContainer(AppNavigator);


// Wrap everything up to provivde the basic framework
// of this app
export default ()=>{
  return(
    <PaperProvider theme={theme}>
      <AppContainer /> 
    </PaperProvider>
  )
}
