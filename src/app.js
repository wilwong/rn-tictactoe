import React from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from '@screens/home'
import GameScreen from '@screens/game'
import GameEndScreen from '@screens/gameEnd'
import SettingsScreen from '@screens/settings'

import theme from '@constants/paperTheme'

const NavigatorConfigs = {
	initialRouteName:'Home',
	headerMode: 'none',
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Game: {
    screen: GameScreen,
  },
  GameEnd: {
    screen: GameEndScreen,
  },
  Settings:{
  	screen: SettingsScreen,
  }
}, NavigatorConfigs);


const AppContainer = createAppContainer(AppNavigator);


export default ()=>{
  return(
    <PaperProvider theme={theme}>
      <AppContainer /> 
    </PaperProvider>
  )
}