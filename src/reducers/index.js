const game = (state, action) => {

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

  const validateDiagonalWin = (moves, row, player) => {
    let diagonal1 = moves.filter((move) => {
      return (move.player === player) && ((move.x - move.y) === 2 || (move.y - move.x === 2) || (move.y === move.x && move.y === 2 && move.x === 2));
    });

    let diagonal2 = moves.filter((move) => {
      return (move.x === move.y && move.player === player)
    });

    return diagonal1.length === 3 || diagonal2.length === 3;
  }

  const theresAWinner = (moves, lastMove) => {
    if (moves.length < 5) return false;
    const horizontalWin = validateVictoryHorizontal(moves, lastMove.x, lastMove.player);
    const verticalWin = validateVictoryVertical(moves, lastMove.y, lastMove.player);
    const diagonalWin = validateDiagonalWin(moves, lastMove.x, lastMove.player);
    if (horizontalWin || verticalWin || diagonalWin) {
      return true;
    } else return false;

  }

  if (action.payload && action.payload.lastMove) {
    if (theresAWinner(action.payload.gameMoves, action.payload.lastMove)) {
      return {
        gameMoves: action.payload.gameMoves,
        player: action.payload.player,
        gameStatus: 'won'
      }
    }
  }

  let gameMoves = (action.payload && action.payload.gameMoves) || [];
  let player = (action.payload && action.payload.player) || 'X';
  let gameStatus = (action.payload && action.payload.gameStatus) || 'open';

  return {
    player,
    gameMoves,
    gameStatus
  }
}

export default game;
