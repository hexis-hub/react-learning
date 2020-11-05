import React, { useEffect, useState }  from 'react';

import {
  useParams,
  Link
} from "react-router-dom";

import './User.css';


const Details = () => {

  let { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() =>  {
    userAction(id)
  }, [id]);

  const userAction = async (searchTerm) => {
    const url = 'https://api.github.com/users/' + searchTerm;
    const response = await fetch(url);
    const myJson = await response.json(); //extract JSON from the http response
    setUser(myJson);
    return myJson;
  }

  return (
    <div className='UserContainer'>
      <div className='baza-daqui'>  
        <Link to="/">BAZA JA DAQUI</Link>     
      </div>
      <span>{user.login}</span>
      <img src={user.avatar_url} height={500} width={500} alt="yes"></img> 
      <div className='User'>{user.login}</div>         
    </div>
  );
}

export default Details;