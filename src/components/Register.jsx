
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/authApi';

const Register = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: <input type="text" name="name" onChange={handleChange} /></label>
      <label>Email: <input type="email" name="email" onChange={handleChange} /></label>
      <label>Password: <input type="password" name="password" onChange={handleChange} /></label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
