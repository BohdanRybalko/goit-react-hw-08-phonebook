import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://connections-api.herokuapp.com';

const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/contacts`,
});

export const fetchContacts = createAsyncThunk('fetchAll', async (_, thunkApi) => {
  try {
    const response = await axiosInstance.get();
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('addContact', async (contact, thunkApi) => {
  try {
    const response = await axiosInstance.post('', contact);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('deleteContact', async (id, thunkApi) => {
  try {
    await axiosInstance.delete(`/${id}`);
    return id;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const registerUser = createAsyncThunk('registerUser', async (userData, thunkApi) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/signup`, userData);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk('loginUser', async (userData, thunkApi) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk('logoutUser', async (_, thunkApi) => {
  try {
    await axios.post(`${API_BASE_URL}/users/logout`);
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk('getCurrentUser', async (_, thunkApi) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/current`);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
