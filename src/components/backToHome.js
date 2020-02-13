import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Layout from '@constants/layout'

import BackIcon from '@components/icons/back'

export default (props) => {
  const nav = useNavigation()
  return (
    <BackIcon 
      onPress={()=>nav.popToTop()} 
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
