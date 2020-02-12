import { Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

const baseFontSize = 16

export default {
	width,
	height,
  baseFontSize,
  marginSize: baseFontSize,
  innerWidth: width - (baseFontSize*2)
}
