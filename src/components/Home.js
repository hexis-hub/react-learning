import React, {useState} from 'react';
import UsersList from './UsersList';

function Home(){  
    return (
      <div className="App"> 
        <UsersList/>        
      </div>
    );
}

export default Home;