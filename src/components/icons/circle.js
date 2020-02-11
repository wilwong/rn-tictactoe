import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name='circle'
      size={26}
      // style={{ marginBottom: -3 }}
      // color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}