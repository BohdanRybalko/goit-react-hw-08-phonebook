import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/contactsApi';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      {currentUser && (
        <div>
          <p>{currentUser.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default Navigation;
