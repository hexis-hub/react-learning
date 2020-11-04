import './Users.css'
import { Table } from 'antd';
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from '@ant-design/icons';

const Users = ({users}) => {

    const columns = [
        {
          title: 'Profile Pic',
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
          render: (_, user) => <Link to={`/user/${user.login}`} className="info-btn"><PlusCircleOutlined style={{fontSize: 20}} /></Link>
        }
      ];

    return(
        <div id="users" className="mt10">
            <Table key="users-table" columns={columns} dataSource={users} className="width-50" bordered />
        </div>
    )
}

export default Users