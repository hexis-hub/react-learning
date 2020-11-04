import React, { useEffect, useState } from 'react';
import { getUser } from '../api/requester';
import { useParams } from "react-router-dom";

const Profile = () => {
    
  const { username } = useParams();
  
  const [ user, setUser ] = useState({});

  const requestAPI = async () => {

    let response = await getUser(username)

  console.log(response)
    if(response){

      setUser(response.data)
    }
  }

  useEffect(requestAPI)

  return (
    <div>
      <h3>Username: {user.login}</h3>
    </div>
  );
}

export default Profile