import React from 'react';
import { useParams } from "react-router-dom";

const Profile = () =>{
    let { username } = useParams();

  return (
    <div>
      <h3>Username: {username}</h3>
    </div>
  );
}

export default Profile