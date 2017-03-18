function alreadyPlayed(movement, gameMoves) {
  return (gameMoves.filter((pastMove) => {
    return (pastMove.x === movement.x && pastMove.y === movement.y);
  })).length > 0;
}


function playGame(movement, gameMoves, gameStatus) {
  if (alreadyPlayed(movement, gameMoves) || gameStatus === 'won') {
    return {
      type: 'INVALID',
      payload: {
        player: movement.player,
        gameMoves,
        gameStatus
      }
    }
  }

  return {
    type: movement.player === 'X' ? 'MOVEMENT_O' : 'MOVEMENT_X',
    payload: {
      player: movement.player === 'O' ? 'X' : 'O',
      gameMoves: gameMoves.concat(movement),
      lastMove: movement
    }
  }
}
export default playGame;
