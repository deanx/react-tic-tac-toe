import { wonGameStatus, openGameStatus, playerX } from '../constants';
import { theresAWinner } from '../game';
const game = (state, action) => {

  let gameMoves = (action.payload && action.payload.gameMoves) || [];
  let player = (action.payload && action.payload.player) || playerX;
  let gameStatus = (action.payload && action.payload.gameStatus) || openGameStatus;

  if (action.payload && action.payload.gameMoves.length >= 5) {
    if (theresAWinner(action.payload.gameMoves, action.payload.lastMove)) {
      gameStatus = wonGameStatus;
    }
  }

  return {
    player,
    gameMoves,
    gameStatus
  }
}

export default game;
