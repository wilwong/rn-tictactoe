import { StyleSheet } from 'react-native'
import Colors from './colors.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinkBackground: {
    backgroundColor: Colors.background
  }
});
