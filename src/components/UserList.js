import React, { useState, useEffect } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import EditUser from './EditUser'; // Import the EditUser component

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // Track the user being edited

  useEffect(() => {
    // Fetch the user data from your API or JSON server here
    fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    // Send a DELETE request to your server to delete the user with the specified id
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the deleted user from the list
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        console.log('User deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const handleEditClick = (user) => {
    // Set the user being edited when the pencil icon is clicked
    setEditingUser(user);
  };

  const handleUpdate = (editedUser) => {
    // Send a PUT request to update the user data
    fetch(`http://localhost:3000/posts/${editedUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedUser),
    })
      .then(() => {
        // Update the user data in the state
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === editedUser.id ? editedUser : user
          )
        );
        console.log('User updated successfully');
        setEditingUser(null); // Exit edit mode
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.fullname} - {user.email}
            <button onClick={() => handleDelete(user.id)}>
              <FaTrash />
            </button>
            <button onClick={() => handleEditClick(user)}>
              <FaPen />
            </button>
            {editingUser && editingUser.id === user.id && (
              <EditUser user={user} onUpdate={handleUpdate} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
