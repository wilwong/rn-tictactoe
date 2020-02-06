import { Dimensions, StyleSheet } from 'react-native'

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#c51162',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    height: width / 3,
    width: '100%',
    display: 'flex',
    flexDirection:'row',
  },
  lowerThrid:{
    height: width / 3,
    width: '100%',
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default {
	width: width,
	height: height,
	styles
}