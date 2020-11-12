import React, { useState } from 'react'
import UsersTable from "./UsersTable";

const UsersList = () =>{
    const[users,setUsers] = useState([]);
    const[username,setUsername] = useState("");

    const onChangeHandler=e=>{
        setUsername(e.target.value);
    };
    const submitHandler=async e=>{
        e.preventDefault();
        const usersList = await fetch(`https://api.github.com/search/users?q=${username}`);
        const usersListJSON = await usersList.json();
        console.log(usersListJSON);
        if(usersListJSON)
        {
            setUsers(usersListJSON.items);            
        }        
    };


    let usersList;
    if (users.length > 0) {
      usersList =  <UsersTable users={users}/>;
    } 

    return (
        <>
      <div>                 
            <input              
              type="text"
              value={username}
              onChange={onChangeHandler}
            />       

          <button          
            type="submit"
            onClick={submitHandler}
          >           
            Search
          </button>
          {usersList}
          
        </div>
    </>
    );
};

export default UsersList;