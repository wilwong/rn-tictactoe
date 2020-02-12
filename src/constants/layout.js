import { Dimensions } from 'react-native'
import Constants from 'expo-constants'

const {width, height} = Dimensions.get('window')

const baseFontSize = 16

export default {
	width,
	height,
  baseFontSize,
  statusBarHeight: Constants.statusBarHeight,
  marginSize: baseFontSize,
  innerWidth: width - (baseFontSize*2)
}
