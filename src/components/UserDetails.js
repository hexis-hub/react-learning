import React, { useState,useEffect } from 'react'
import { get } from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const UserDetails = () => {  
    
    async function getUser(userid) {
      try {
          const response = await get(`https://api.github.com/users/${userid}`);
          return response;
      } catch (error) {
          console.log(error)
          return null;
      }
    } 

    async function getRepos(url) {
      try {
          const response = await get(url);
          return response;
      } catch (error) {
          console.log(error)
          return null;
      }
    } 

    const { userid } = useParams();

    const [user, setUser] = useState({});
    const[repositories,setRepositories]=useState([]);
  
    const requestData = async () => {
      const response = await getUser(userid)  
      if (response) {
        console.log(response.data);
        setUser(response.data);
        const repos = await getRepos(response.data.repos_url)
        if (repos) {
          console.log(repos.data);
          setRepositories(repos.data);
        }
      }
    }
  
    useEffect(() => { requestData() }, [])
    return (
      <>
       {/* <div>user details {userid}</div>    */}
       
        <div>Id {user.login}</div>  
        <div>Name {user.name}</div>  
        <div>Location {user.location}</div>   
        <div>Followers {user.followers}</div>   
        <div>Following {user.following}</div>          
        {!user.avatar_url ? (
                        " "
                        ) : (
                        <img
                            className="ui small circular image"
                            src={user.avatar_url}
                            alt={user.avatar_url}
                        />
          )}      

        {repositories.map(repo => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
          ))}

                        
                         
       
       <div><Link to="/">Back</Link></div>
      </>
       
    );
};

export default UserDetails;