
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const registerUser = createAsyncThunk('registerUser', async (userData, thunkApi) => {
  try {
    const response = await axiosInstance.post('/users/signup', userData);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk('loginUser', async (loginData, thunkApi) => {
  try {
    const response = await axiosInstance.post('/users/login', loginData);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk('logoutUser', async (_, thunkApi) => {
  try {
    await axiosInstance.post('/users/logout');
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk('getCurrentUser', async (_, thunkApi) => {
  try {
    const response = await axiosInstance.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
