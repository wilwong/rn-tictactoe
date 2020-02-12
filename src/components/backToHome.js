import React, { useContext } from 'react'
import { NavigationContext } from 'react-navigation'

import Layout from '@constants/layout'

import BackIcon from '@components/icons/back'

export default (props) => {
  const nav = useContext(NavigationContext);
  return (
    <BackIcon 
      onPress={()=>nav.navigate('Home')} 
      size={50} 
      style={{         
        position: 'absolute',
        top:0,
        left:0,
        marginHorizontal: Layout.marginSize,
        marginVertical: Layout.marginSize
      }}
      {...props}
    /> 
  )
}
