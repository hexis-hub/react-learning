import React from 'react';

import {
  Link
} from "react-router-dom";

import './User.css';


const User = ({ item }) => {

const queroLinkJA = () =>{
  return "/" + item.login;
}

  return (
    <div className='UserContainer'>
      <img src={item.avatar_url} height={100} width={100} alt="yes"></img> 
      <div className='anime'>
        {item.login}
      </div>   
      <div className='anime'>
        <Link to={queroLinkJA}>VAI PARA O GAJO PAH</Link> 
      </div>          
    </div>
  );
}

export default User;