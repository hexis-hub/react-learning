import React, { useState, useEffect, useRef } from 'react';

import User from '../user/User';

import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const addInput = useRef();

  useEffect(() => {
    setUsers([]);
    addInput.current.focus();
  }, []);

  const handleKeyUp = async (e) => {
    if (e.keyCode === 13) {

      if(!e.target.value){
        return;
      }

      let data = await userAction(e.target.value);
      setUsers([...data.items]);
    }
  };

  const userAction = async (searchTerm) => {
    const url = 'https://api.github.com/search/users?q=' + searchTerm;
    const response = await fetch(url);
    const myJson = await response.json(); //extract JSON from the http response
    return myJson;
  }

  return (
    <div className='Container'>
      <div className='Input'>
        DA ME LETRAS <input ref={addInput} onKeyUp={handleKeyUp} />
      </div>
      <div className='Users'>
        {users.map((el, idx) => (
          <User item={el} key={`${el.login}-${idx}`} />
        ))}
      </div>
    </div>
  );
};

export default Users;
