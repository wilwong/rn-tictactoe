import React from 'react'

// Components and HOCs from feature libraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

// Basic react native comps
import { StyleSheet, View } from 'react-native';

// Screens comps of this app
import HomeScreen from '@screens/home'
import GameScreen from '@screens/game'
import AboutScreen from '@screens/about'

// Theme config for React Native Paper
import theme from '@constants/paperTheme'

// initiate the Stack Navigator
const Stack = createStackNavigator()

// Wrap everything up to provivde the basic framework
// of this app
export default ()=>{
  return(
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode='none'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
