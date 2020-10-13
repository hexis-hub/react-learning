import React from 'react';

const Square = (props) => {

      return (
        <button onClick={props.onClicked} className="square">
          { props.value }
        </button>
      );    
}

export default Square;