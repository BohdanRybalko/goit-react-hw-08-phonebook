import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import { fetchContacts } from '../redux/contactsApi';

const PrivateRoute = ({ element, fallback }) => {
  const user = useSelector((state) => state.auth.user); // Use useSelector
  return user ? element : fallback;
};

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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute
          path="/contacts"
          element={<ContactList />}
          fallback={<Navigate to="/login" />}
        />
        <PrivateRoute
          path="/filter"
          element={<Filter />}
          fallback={<Navigate to="/login" />}
        />
        <PrivateRoute
          path="/logout"
          element={<Logout />}
          fallback={<Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default App;
