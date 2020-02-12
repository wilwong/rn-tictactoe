import React, { useContext } from 'react'
import { NavigationContext } from 'react-navigation';

import BackIcon from '@components/icons/back'

export default (props) => {
  const nav = useContext(NavigationContext);
  return (
    <BackIcon onPress={()=>nav.navigate('Home')} size={50} {...props}/> 
  )
}
