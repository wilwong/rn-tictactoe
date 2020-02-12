import React from 'react'
import { View } from 'react-native'

import Grid from '../components/grid.js'

import CommonStyles from '@constants/commonStyles'

export default (props) => {
  return (
    <View style={[CommonStyles.container, CommonStyles.pinkBackground]}>
      <Grid navigation={props.navigation}/>
    </View>
  );
}
