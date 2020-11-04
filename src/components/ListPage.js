import React, { useState } from 'react';
import { getUsers } from '../api/requester';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Users from './Users';

const ListPage = () => {

    const [users, setUsers] = useState([]);

    const requestAPI = async (e) => {

        if(e.keyCode === 13){

            let usersList = await getUsers(e.target.value)

            setUsers(usersList)
        }
    }

    return (
        <div>
            <div>
                <Input size="large" placeholder="Name" prefix={<UserOutlined />} onKeyUp={requestAPI} />
            </div>
            <div>
                <Users users={users}/>
            </div>
        </div>
    )
}

export default ListPage