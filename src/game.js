const validateVictoryHorizontal = (moves, line, player) => {
  return (moves.filter((move) => {
    return move.x === line && move.player === player;
  }).length === 3);
}

const validateVictoryVertical = (moves, column, player) => {
  return (moves.filter((move) => {
    return move.y === column && move.player === player;
  }).length === 3);
}

const validateVictoryDiagonal = (moves, row, player) => {
  let diagonal1 = moves.filter((move) => {
    return (move.player === player) && ((move.x - move.y) === 2 || (move.y - move.x === 2) || (move.y === move.x && move.y === 2 && move.x === 2));
  });

  let diagonal2 = moves.filter((move) => {
    return (move.x === move.y && move.player === player)
  });

  return diagonal1.length === 3 || diagonal2.length === 3;
}

export const theresAWinner = (moves, lastMove) => {
  const horizontalWin = validateVictoryHorizontal(moves, lastMove.x, lastMove.player);
  const verticalWin = validateVictoryVertical(moves, lastMove.y, lastMove.player);
  const diagonalWin = validateVictoryDiagonal(moves, lastMove.x, lastMove.player);
  if (horizontalWin || verticalWin || diagonalWin) {
    return true;
  } else {
    return false;
  }
}
