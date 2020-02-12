import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '@constants/colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons 
      name='md-arrow-back' 
      size={26} 
      color={Colors.text}
      {...props} />
  )
}
