import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { authReducer } from './auth/slice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});

export default store;
