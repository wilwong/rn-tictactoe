import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import GameContext,{defaultContext} from '../context/gameContexts.js';

import Layout from '../constants/layout.js';
import Square from './square.js';

export default function Grid() {
  const message = ()=>{console.log('Only the top-left square works, check the code')};
  return (
    <GameContext.Provider value={defaultContext}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.item}>
            <Square/>
          </View>
          <View style={styles.item}>
            <TouchableOpacity style={styles.button}
                onPress={message}>
                <Text>Press</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Square />
          </View>
        </View>
     
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity style={styles.button}
                onPress={message}>
                <Text>Press</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity style={styles.button}
                onPress={message}>
                <Text>Press</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity style={styles.button}
                onPress={message}>
                <Text>Press</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity style={styles.button}
                onPress={message}>
                <Text>Press</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity style={styles.button}
                onPress={message}>
                <Text>Press</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity style={styles.button}
                onPress={message}>
                <Text>Press</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </GameContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    height: Layout.width / 3,
    width: '100%',
    display: 'flex',
    flexDirection:'row',
  },
  item:{
    width: Layout.width/3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth :1,
    borderColor: 'black',
    position: 'relative'
  },
  button:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
