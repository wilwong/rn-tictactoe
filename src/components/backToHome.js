import React, { useContext } from 'react'
import { NavigationContext } from 'react-navigation';

import BackIcon from '@components/icons/back'

import Colors from '@constants/colors'

export default (props) => {
  const nav = useContext(NavigationContext);
  return (
    <BackIcon onPress={()=>nav.navigate('Home')} color={Colors.text} size={50} {...props}/> 
  )
}
