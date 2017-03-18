import React from 'react';

import GamePiece from './GamePiece';
import './App.css';
import { numRows, numCols, wonGameStatus } from '../constants';

const gameBoard = (props) => {
  return (
    <div>
    {props.game.gameStatus === wonGameStatus ? <span>Winner!<button onClick={() => props.playGame({},[])}>play again!</button></span> : ''}
    <div className='gameBoard'>    
    {
  [...Array(numRows * numCols).keys()].map((key) => {
        key++;
        let row = Math.ceil(key / numRows);
        let col = key % numCols || numCols; 
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