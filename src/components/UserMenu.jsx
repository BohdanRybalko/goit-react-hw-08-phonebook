
import React from 'react';

const UserMenu = ({ email, onLogout }) => {
  return (
    <div>
      <p>{email}</p>
      <button onClick={onLogout}>Вийти</button>
    </div>
  );
};

export default UserMenu;
