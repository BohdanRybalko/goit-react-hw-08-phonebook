import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authApi';

const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email: <input type="email" name="email" onChange={handleChange} /></label>
      <label>Password: <input type="password" name="password" onChange={handleChange} /></label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
