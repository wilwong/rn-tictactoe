import { createContext } from 'react';

export const defaultContext = {
	
	// 0 for circle, 1 for cross
	player : 0,
	togglePlayer : ()=>{
		console.log(defaultContext.player);
		if(defaultContext.player==0){
			defaultContext.player=1;
		}else{
			defaultContext.player=0;
		}
	},
	// 0 for 
	gameState : 0,
	toggleGameState: (newState)=>{
		defaultContext.gameState = newState;
	}
}

export default  createContext(defaultContext);