import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '@constants/colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name='md-close'
      size={props.size || 50}
      color={Colors.text}
      {...props}
    />
  );
}
