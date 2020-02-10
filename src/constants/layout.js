import { Dimensions, StyleSheet } from 'react-native'
import Colors from './colors'

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    height: width / 3,
    width: '100%',
    display: 'flex',
    flexDirection:'row',
  }
});

export default {
	width: width,
	height: height,
	styles
}