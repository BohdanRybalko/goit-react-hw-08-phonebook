import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('fetchAll', async (_, thunkApi) => {
  try {
    const response = await axios.get('');
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('addContact', async (contact, thunkApi) => {
  try {
    const response = await axios.post('', contact);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('deleteContact', async (id, thunkApi) => {
  try {
    await axios.delete(`/${id}`);
    return id;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
