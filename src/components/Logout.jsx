
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authApi';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLogout = async () => {
      try {
  
        await dispatch(logoutUser());
      } catch (error) {
        console.error('Error during logout:', error.message);
      }
    };

    handleLogout();
  }, [dispatch]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default Logout;
