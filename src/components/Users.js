import './Users.css'
import { Table } from 'antd';
import { Link } from "react-router-dom";

const Users = ({users}) => {

    const columns = [
        {
          title: 'Profile Pic',
          dataIndex: 'avatar_url',
          key: 'profilePic',
          render: (url, user) => <img className="profile-pic" alt={`Picture of value ${user.login}`} src={url}></img>,
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
          render: (_, user) => <Link to={`/user/${user.login}`} className="info-btn">[+]</Link>
        }
      ];

    return(
        <div id="users" className="mt10">
            <Table columns={columns} dataSource={users} />
        </div>
    )
}

export default Users