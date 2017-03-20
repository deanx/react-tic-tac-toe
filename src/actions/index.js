import { wonGameStatus, movementO, movementX, playerO, playerX, invalidMovement } from '../constants';

import { alreadyPlayed } from '../game'


function playGame(movement, gameMoves, gameStatus) {
  if (alreadyPlayed(movement, gameMoves) || gameStatus === wonGameStatus) {
    return {
      type: invalidMovement,
      payload: {
        player: movement.player,
        gameMoves,
        gameStatus
      }
    }
  }

  return {
    type: movement.player === playerX ? movementO : movementX,
    payload: {
      player: movement.player === playerO ? playerX : playerO,
      gameMoves: gameMoves.concat(movement),
      lastMove: movement
    }
  }
}
export default playGame;
