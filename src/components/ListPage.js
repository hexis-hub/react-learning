import { UserOutlined } from '@ant-design/icons';
import { Input, Layout } from 'antd';
import React, { useState } from 'react';
import { getUsers } from '../api/requester';
import logo from '../logo.svg';
import Users from './Users';

const { Header, Content, Footer } = Layout;

const ListPage = () => {

    const [users, setUsers] = useState([]);

    const requestAPI = async (e) => {

        if (e.keyCode === 13) {

            let usersList = await getUsers(e.target.value)

            setUsers(usersList)
        }
    }

    return (
        <Layout className="minHeight">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div style={{ width: '20rem', margin: '0 auto' }}>
                    <img src={logo} className="App-logo" alt="logo" style={{ float: "left" }} />
                    <h4 style={{ float: "right", fontSize: '1.3rem' }}>GitHub Profile Searcher</h4>
                </div>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div style={{ margin: '16px 0' }}>
                    <Input size="large" placeholder="Name" prefix={<UserOutlined />} style={{ maxWidth: '20rem' }} onKeyUp={requestAPI} />
                </div>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <Users users={users} />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>©2018 GitHub Profile Searcher</Footer>
        </Layout>
    )
}

export default ListPage