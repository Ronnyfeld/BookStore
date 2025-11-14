import React, { useState } from 'react';
import Axios from 'axios';

function UserItem({ user, setUsers }) {
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    age: user.age,
  });

  const handleDelete = () => {
    Axios.delete(`http://localhost:5000/deleteUser/${user._id}`)
      .then(() => {
        setUsers(prev => prev.filter(u => u._id !== user._id));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  const handleUpdate = () => {
    Axios.put(`http://localhost:5000/updateUser/${user._id}`, updatedUser)
      .then((res) => {
        setUsers(prev => prev.map(u => u._id === user._id ? res.data : u));
        setEditing(false);
      })
      .catch(error => console.error('Error updating user:', error));
  };

  return (
    <div className="user-item">
      {editing ? (
        <div className="user-edit-form">
          <input
            type="text"
            value={updatedUser.name}
            onChange={e => setUpdatedUser({ ...updatedUser, name: e.target.value })}
          />
          <input
            type="number"
            value={updatedUser.age}
            onChange={e => setUpdatedUser({ ...updatedUser, age: e.target.value })}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="user-details">
          <h2>{user.username}</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <button className="button" onClick={handleDelete}>Delete</button>
          <button className="button" onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default UserItem;
