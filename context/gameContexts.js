import { createContext } from 'react';

export const defaultContext = {
	
	// 1 for circle, 2 for cross
	player : 1,
	togglePlayer : (cb)=>{
	    console.log('Toggle Player Triggered ');
	    if(defaultContext.player==1){
	      defaultContext.player=2;
	    }else{
	      defaultContext.player=1;
	    }
	    cb(defaultContext.player);
	  },
	// there has to be a board  
	board: null,

	// is the game over yet
	gameState : 0,
	chageGameState: ()=>{}
}

export default createContext(defaultContext);