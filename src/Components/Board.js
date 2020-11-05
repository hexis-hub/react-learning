import React from 'react';
import Square from './Square'


  export default class Board extends React.Component {
    state = {
        squares: Array(9).fill(null),
        turn: 'X'
      };

      // checkWin = () =>{
      //   if(this.state.squares.every((curr) => curr !== null)){
      //     return;
      //   }
      //   else{
      //     let width = 3;
      //     let maxLen = this.state.squares.length;
      //     for(let i = 0; i < maxLen; i++){
      //       let xCoord = i % width;
      //       let yCoord = i / width; 


      //     }
      //   }
      // }

      takingTurns = () => {
        var t = this.state.turn === 'X' ? 'O' : 'X';
        this.setState({turn: t});
      };

      update (value) {
        let tempState = [...this.state.squares];

        if(!tempState[value]){
          tempState[value] = this.state.turn;
          this.setState({
            squares: tempState
          });
          this.takingTurns();
        }
        console.log(this.state.squares);
      }
      
    renderSquare(i) {
      return <Square squareUpdate={() => this.update(i)} squareValue={this.state.squares[i]}/>;
    }
  
    render() {
      const status = 'Next player: ';
      const endGame = 'Acabou, ve se entendes, nao vale a pena mesmo que tu tentes...';
  
      return (
        <div>
          <div className="status">{this.state.squares.every((curr) => curr !== null)? endGame : status + this.state.turn}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }