import React, {useContext, useState} from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'

// If you use context
import GameContext from '@contexts/gameContexts.js'

// Alternatively, if you use Redux
import { connect } from 'react-redux'
import { ActionWithPayload, ActionWithoutPayload } from '@actions/'


// Styles
import styles from './styles.js';
// Image Assets
import circle from '@assets/circle.svg'
import cross from '@assets/cross.svg'


const Square = (props) => {
	const gameContext= useContext(GameContext);
  const [squareStatus, setSquareStatus] = useState(gameContext.board[props.row][props.col]);
 
  console.log(props);

  if(squareStatus===0){
  	return (
      <View style={styles.item}>
      	<TouchableOpacity style={styles.button}
        		onPress={()=>{
              props.ActionWithoutPayload()
              gameContext.placeMove(props.row, props.col, setSquareStatus)
            }}>
            <View style={styles.button}></View>

      	</TouchableOpacity>
      </View>
  	)
  }else if(squareStatus<0){
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


const mapStateToProps = (state)=>{
  return{ 
    actionState: state.actionReducer
  }
}

const mapDispatchToProps = {
  ActionWithoutPayload, ActionWithPayload
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Square)