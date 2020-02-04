import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import GameContext,{defaultContext} from '../context/gameContexts.js';

import Layout from '../constants/layout.js';
import circle from '../assets/circle.svg';
import cross from '../assets/cross.svg';

import Square from './square.js';


export default function Grid() {

  return (
    <GameContext.Provider value={defaultContext}>
      <View style={styles.container}>
          <Image
            style={{width: 50, height: 50}}
            source={circle}
          />
          <Image
            style={{width: 50, height: 50}}
            source={cross}
          />

        <View style={styles.row}>
          <Square />
          <Square />
          <Square />
        </View>
     
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity 
              onPress={() => console.log('Simple Button pressed')}>
              <Text>Press me</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity 
              onPress={() => console.log('Simple Button pressed')}>
              <Text>Press me</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity 
              onPress={() => console.log('Simple Button pressed')}>
              <Text>Press me</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity 
              onPress={() => console.log('Simple Button pressed')}>
              <Text>Press me</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity 
              onPress={() => console.log('Simple Button pressed')}>
              <Text>Press me</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <TouchableOpacity style={styles.button}
              onPress={() => console.log('Simple Button pressed')}>
              <Text>Press me</Text>
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
