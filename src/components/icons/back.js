import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name='md-arrow-back'
      size={26}
      // style={{ marginBottom: -3 }}
      // color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
