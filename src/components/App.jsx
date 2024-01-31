import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contactsApi'; 
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Register from './Register';
import Login from './Login';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
