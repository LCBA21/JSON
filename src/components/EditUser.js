import React, { useState, useEffect } from 'react';
import { FaPen } from 'react-icons/fa';

const EditUser = ({ user, onUpdate }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEdit = () => {
    // Toggle edit mode for the user
    onUpdate(editedUser);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3>Edit User</h3>
      <form>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullname"
            value={editedUser.fullname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleEdit}>Update</button>
      </form>
    </div>
  );
};

export default EditUser;
