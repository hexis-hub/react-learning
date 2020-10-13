import React from 'react';

const History = (props) => {

      return (
        <button onClick={props.onClicked}>Move {props.value}</button>
      );    
}

export default History;