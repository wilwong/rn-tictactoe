import { StyleSheet } from 'react-native'
import Colors from './colors'
import Layout from './layout'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: Layout.height - Layout.statusBarHeight,
    marginTop: Layout.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    display: 'flex',
    width: '100%',
    flexDirection: 'row'
  },
  pinkBackground: {
    backgroundColor: Colors.background
  }
});
