import React, { useState, useRef } from 'react';
import User from '../User/User'
import './Users.css';

const Users = () => {

    const [users, setUsers] = useState([]);
    const inputSearch = useRef();

    const handleSearchUser = () => {

        // https://api.github.com/users/RubenMateus
        // "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
        //search on api and set 
        fetch("https://api.github.com/search/users?q=" + inputSearch.current.value)
            .then(res => res.json())
            .then(
                (result) => {
                    
                    if (!result.errors) {
                        setUsers(result.items);
                    }
                    else{
                        setUsers([]);
                    }
                    console.log(result);
                    //Como mapear com outras propriedades
                    
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                }
            )
        console.log(inputSearch.current.value);
    };
    
    return (
        <div>
            <div className="topnav">        
                <div className="search-container">
                <input type="text" ref={inputSearch} placeholder="Search.." name="search"/>
                <button type="submit" onClick={handleSearchUser}><i className="fa fa-search"></i></button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                        users.length === 0 ? "Sem dados" : 
                            users.map((el, idx) => (
                                <User item={el} index={idx + el.login} key={idx} />
                            ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;