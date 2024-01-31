
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const fetchContacts = createAsyncThunk('fetchAll', async (_, thunkApi) => {
  try {
    const response = await axiosInstance.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('addContact', async (contact, thunkApi) => {
  try {
    const response = await axiosInstance.post('/contacts', contact);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('deleteContact', async (id, thunkApi) => {
  try {
    await axiosInstance.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
