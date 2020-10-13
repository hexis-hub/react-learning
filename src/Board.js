import React from 'react';
import Square from './Sqare';
import Reset from './Reset';
import History from './History';
import {validateGame} from './Utils/Utils'

class Board extends React.Component {
    
    initialState = () => ({ nextSymbol: "X", data: Array(9).fill(null), history: [] });
    state = this.initialState();

    handleClick(index) { 

        if (!this.state.data[index])
        {
            let newData = [...this.state.data];
            newData[index] = this.state.nextSymbol;
            this.addhistory(newData);
            this.setState({data: newData, nextSymbol: this.state.nextSymbol === "X" ? "0" : "X"});
            
            var isValid = validateGame(newData);
            
            if(isValid)
            {
                alert(`You ${newData[index]} Win`);
                this.resetClick();
            }
        }
    }

    addhistory(data) {
      
      let newHistory = [...this.state.history];
      newHistory.push(data)

      this.setState({history: newHistory });
    }

    resetClick() {
      this.setState(this.initialState());
    }

    history(index) {
      this.setState({data: this.state.history[index]});
    }

    renderSquare(i) {
      return <Square onClicked={ () => this.handleClick(i) } value={this.state.data[i]} />;
    }

    renderHistory()
    {
      return this.state.history.map((element, index) => {
          return <History onClicked={ () => this.history(index)} value={index+1} />
      });
    }

    render() {
      const status = `Next player: ${this.state.nextSymbol}`;
      
      return (
        <div>
          <div className="status">{status}</div>
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
          <Reset onClicked={ () => this.resetClick() } />
          <br />
          {this.renderHistory()}
        </div>
      );
    }
  }

  export default Board;