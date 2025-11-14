import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import UserItem from './UserItem';


function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/getUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="user-list">
      {users.map(user => (
        <UserItem key={user._id} user={user} setUsers={setUsers} />
      ))}
    </div>
  );
}

export default UserList;
