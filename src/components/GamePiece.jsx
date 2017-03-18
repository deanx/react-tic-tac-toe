import React from 'react';

const gamePiece = (props) => {
  
  return (
    <div className={`gamePiece ${props.className}Move`} onClick={() => props.move(props.row, props.col, props.gameStatus)}></div>
  );
}

export default gamePiece;