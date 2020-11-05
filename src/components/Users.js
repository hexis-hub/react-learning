import { PlusCircleOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { Link } from "react-router-dom";
import './Users.css';

const Users = ({ users }) => {

  const columns = [
    {
      title: 'Image',
      dataIndex: 'avatar_url',
      key: 'profilePic',
      render: (url, user) => <img className="profile-pic" alt={user.login} src={url}></img>,
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'login',
      key: 'login',
    },
    {
      title: 'info',
      dataIndex: '',
      render: (_, user) => <Link to={`/user/${user.login}`} className="info-btn"><PlusCircleOutlined style={{ fontSize: 20 }} /></Link>
    }
  ];

  return (
    <div id="users" className="mt10">
      <Table rowKey={(user) => user.id} columns={columns} dataSource={users} bordered />
    </div>
  )
}

export default Users