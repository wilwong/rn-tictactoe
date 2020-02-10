import { createContext } from 'react'

export const defaultContext = {
	
	// -1 for circle, 1 for cross
	player : 1,
	togglePlayer : ()=>{
	    defaultContext.player = defaultContext.player *-1
	},

	// array of 9 that represents the board
	/*
		 0,0 | 0,1 | 0,2
		-----------------
		 1,0 | 1,1 | 1,2 
		-----------------
		 2,0 | 2,1 | 2,2
	*/ 
	board: [ [0,0,0], [0,0,0], [0,0,0]],
	placeMove : (rowId,colId, cb)=>{
		defaultContext.board[rowId][colId] = defaultContext.player
		defaultContext.togglePlayer()
		defaultContext.gameStateDispatch({
			type: 'play'
		})
		if(typeof cb == 'function') cb(defaultContext.player)
	},

	// states: 0=playing, 1=Xwins, -1=Owins, 2=tie
	gameState : 0,
	determineWin : (sum)=>{
		if(sum==-3){
			defaultContext.gameState = -1
		}else if (sum ==3){
			defaultContext.gameState = 1
		}
	},
	gameStateDispatch : ()=>{},
	gameStateReducer : (state, action)=>{
		switch(action.type){
			case 'play':
				const { board, determineWin } = defaultContext;
			    let i;
			    for(i=0;i<3;i++){		//check if any rows had a win
			    	const rowSum = board[i][0]+board[i][1]+board[i][2]
			    	determineWin(rowSum)
			    }
			    if(defaultContext.gameState==0){
			    	for(i=0;i<3;i++){	//check if any cols had a win
				    	const colSum = board[0][i]+board[1][i]+board[2][i]
				    	determineWin(colSum)
				    }
			    }
			    //check if any wins on the left & right cross
			    if(defaultContext.gameState==0){
			    	const leftAcross = board[0][0]+board[1][1]+board[2][2]
			    	determineWin(leftAcross)
		    	}
		    	if(defaultContext.gameState==0){
			    	const rightAcross = board[2][0]+board[1][1]+board[0][2]
				    determineWin(rightAcross)
				}
				//check for ties
				if(defaultContext.gameState==0){
					let boardSum = 0;
					board.map((row,i)=>{
						row.map((col,j)=>{
							boardSum = boardSum + Math.abs(col);
						})
					})
					defaultContext.gameState = boardSum == 9 ? 2 : defaultContext.gameState;
				}
			    return defaultContext.gameState
			case 'reset':
				defaultContext.board = [[0,0,0], [0,0,0], [0,0,0]];
				defaultContext.player = 1
				defaultContext.gameState = 0
				return defaultContext.gameState
			default:
				console.log('fucked up action', action.type);
		}
	}
}

export default createContext(defaultContext);