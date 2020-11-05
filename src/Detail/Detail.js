import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Detail.css';

const Detail = ({match}) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/" + match.params.login)
            .then(res => res.json())
            .then(
                (result) => {
                    
                    if (!result.errors) {
                        setUser(result);
                    }
                    else{
                        setUser();
                    }
                    console.log(result);
                    //Como mapear com outras propriedades
                }
            )
      }, []);

    return (
        <div className="container">
            <div className="left">
                <img src={user.avatar_url}></img>
            </div>
            <div className="right">
                <label>Name: </label>{user.name}
                <br />
                <label>Company: </label>{user.company}
                <br />
                <label>Location: </label>{user.location}
                <br />
                <label>Blog: </label>{user.blog}
                <br />
                <label>GoTo: </label><Link to={user.url} target={"_blank"}>Profile</Link>
            </div>
            <div className="below"><Link to="/">Back</Link></div>
        </div>
    );

};

export default Detail;