import React from 'react';

import GamePiece from './GamePiece';
import './App.css';


const gameBoard = (props) => {
  
  return (
    <div>
    {props.game.gameStatus === 'won' ? <span>Winner!<button onClick={() => props.playGame({},[])}>play again!</button></span> : ''}
    <div className='gameBoard'>    
    {
  [1,2,3,4,5,6,7,8,9].map((key) => {
        let row = Math.ceil(key / 3);
        let col = key % 3 || 3; 
        let className = props.getClassName(row, col);

        let innerProps = {
          row,
          col,
          className,
          gameStatus:props.game.gameStatus,
          move: props.move,
        };
        return <GamePiece key={ key } {...innerProps}/>
      })
    }
    
    </div></div>
  )
} 

export default gameBoard;