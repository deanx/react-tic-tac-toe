import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GameBoard from '../components/GameBoard';
import playGame from '../actions/index';

class Game extends Component {
  move(x, y, gameStatus) {
    let movement = {
      x,
      y,
      player:this.props.game.player
    } 
    this.props.playGame(movement, this.props.game.gameMoves, gameStatus); 
  }

  getClassName(x, y) { 
    let moves = this.props.game.gameMoves;
    let className;
    moves.forEach((move) => {
      if(move.x === x && move.y === y) className = move.player
    });

    return className;
  }

  render() {
    return ( <GameBoard {...this.props} getClassName={this.getClassName.bind(this)} move={this.move.bind(this)} / >
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state
  };
}
                            
function mapDispatchToProps(dispatch) {
  return bindActionCreators({playGame}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

