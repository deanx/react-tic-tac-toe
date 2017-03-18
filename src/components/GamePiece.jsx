import React from 'react';

const gamePiece = (props) => {
  console.log(props);
  return (
    <div className={`gamePiece ${props.className}Move`} onClick={() => props.move(props.row, props.col, props.gameStatus)}></div>
  );
}

export default gamePiece;