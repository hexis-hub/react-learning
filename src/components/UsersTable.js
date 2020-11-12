import React from "react";
import {Link,useParams } from "react-router-dom";

const UsersTable = ({users}) => {
    let { userid } = useParams();

  return (
    <table className="ui celled table">
      <thead>
        <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Score</th>  
            <th>Details</th>  
        </tr>
      </thead>
      <tbody>
          {
              users.map(user=>(
                  <tr>
                      <td>
                        {!user.avatar_url ? (
                        " "
                        ) : (
                        <img
                            className="ui small circular image"
                            src={user.avatar_url}
                            alt={user.avatar_url}
                        />
                        )}
                        </td>
                        <td>{user.login}</td>
                        
                        <td>{user.score}</td> 
                        <td>
                            <Link to={ `/UserDetails/${user.login}` } >
                                <button>More Details</button>
                            </Link>
                        </td>         
                  </tr>
              ))
          }        
      </tbody>
    </table>
  );
};

export default UsersTable;