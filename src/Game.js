import React from 'react';
import Board from './components/Board';
import './Game.css';

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/*  */}</div>
          <ol>{/*  */}</ol>
        </div>
      </div>
    );
  }
}

