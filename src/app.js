import React from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '@screens/home'
import GameScreen from '@screens/game'
import SettingsScreen from '@screens/settings'

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
  Settings:{
  	screen: SettingsScreen,
  }
}, NavigatorConfigs);



export default createAppContainer(AppNavigator);