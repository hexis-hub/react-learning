import { Button, Col, Layout, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { getUser } from '../api/requester';
import logo from '../logo.svg';
import './Profile.css';

const { Header, Content, Footer } = Layout;

const Profile = () => {

  const { username } = useParams();

  const [user, setUser] = useState({});

  const requestAPI = async () => {
    console.log(username)

    const response = await getUser(username)

    if (response) {
      setUser(response.data)
    }
  }

  useEffect(() => { requestAPI() }, [])

  return (
    <Layout key="profile-layout" className="minHeight">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div style={{ width: '20rem', margin: '0 auto' }}>
          <img src={logo} className="App-logo" alt="logo" style={{ float: "left" }} />
          <h4 style={{ float: "right", fontSize: '1.3rem', color: 'white' }}>GitHub Profile Searcher</h4>
        </div>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <br />
        <Link to='/'><Button type="primary">Back</Button></Link>
        <div className="site-layout-background mt10" style={{ padding: 24, minHeight: 380 }}>
          <Row>
            <Col span={6}>
              <img alt={user.login} src={user.avatar_url} style={{ width: "100%" }} />
            </Col>
            <Col span={12} push={1}>
              <Row>
                <Col span={24}>
                  <h3 className="info">Username: {user.login}</h3>
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={12}>
                  <a href={user.followers_url}><h4 className="info">Followers: {user.followers}</h4></a>
                </Col>
                <Col span={12}>
                  <h4 className="info">Following: {user.following}</h4>
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={12}>
                  <h4 className="info">Public Reposts: {user.public_repos}</h4>
                </Col>
                <Col span={12}>
                  <h4 className="info">Public Gists: {user.public_gists}</h4>
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={12}>
                  <h4 className="info">Github Profile:<a href={user.url}> {user.url}</a></h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© 2020 GitHub Profile Searcher</Footer>
    </Layout>
  );
}

export default Profile