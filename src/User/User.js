import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = ({item, index}) => {

    return (
        <tr key={index}>
            <td>{item.login}</td>
            <td>{item.score}</td>
            <td><Link to={`/g/${item.login}`}>More Detail</Link></td>
        </tr>
    );

};

export default User;