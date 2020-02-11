import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name="md-happy"
      size={props.size || 50}
      // style={{ marginBottom: -3 }}
      // color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
