import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native';

import circle from '@assets/circle.svg';
import cross from '@assets/cross.svg';

import GameContext from '@contexts/gameContexts.js';

import Layout from '@constants/layout.js';

class Square extends React.Component {

  constructor(props){
  	// const gameContext= useContext(GameContext);
    super(props)
    this.state = 0
    // const [squareStatus, setSquareStatus] = useState(gameContext.board[props.row][props.col]);
    const setSquareStatus = function(){
      console.log('wtf')
    }.bind(this)
  }
  componentDidMount(){
    const {props} = this
    // this.setSquareStatus = ()=>{
    //   console.log('setSquareStatus')
    //   this.context.placeMove(props.row, props.col, this.setState)
    // }
  }
  render(){
    const {props} = this
    if(this.state===0){
    	return (
        <View style={styles.item}>
        	<TouchableOpacity style={styles.button}
          		onPress={()=>{this.setSquareStatus()}}>
              <View style={styles.button}></View>
        	</TouchableOpacity>
        </View>
    	)
    }else if(this.state<0){
      return(
        <View style={styles.item}>
          <Image source={cross} style={styles.button}/>
        </View>
      )
    }else{
      return(
        <View style={styles.item}>
          <Image source={circle} style={styles.button}/>
        </View>
      )
    }
  }
}
Square.contextType = GameContext
export default Square;

const styles = StyleSheet.create({
  button:{
    width: '70%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    width: Layout.width/3,
    height: Layout.width/3,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderWidth :1,
    borderColor: 'black',
  },
  emptyButton:{
    width: Layout.width/3,
    height: Layout.width/3,
    backgroundColor: 'red',
    borderWidth :1,
    borderColor: 'black',
  }
})