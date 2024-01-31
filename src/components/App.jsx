import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts, getCurrentUser } from '../redux/contactsApi'; 
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Route, Routes } from 'react-router-dom'

import Register from './Register';
import Login from './Login';
import Navigation from './Navigation'; 

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={
          <div>
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </div>
        } />
      </Routes>
    </div>
  );
};

export default App;
