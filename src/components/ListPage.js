import React, { useState } from 'react';
import { getUsers } from '../api/requester'
import SearchBox from './SearchBox';
import Users from './Users';

const ListPage = () => {

    const [users, setUsers] = useState([]);

    const requestAPI = async (username) => {

        var usersList = await getUsers(username)

        setUsers(usersList)
    }

    return (
        <div>
            <div>
                <SearchBox onSubmit={requestAPI}/>
            </div>
            <div>
                <Users users={users}/>
            </div>
        </div>
    )
}

export default ListPage