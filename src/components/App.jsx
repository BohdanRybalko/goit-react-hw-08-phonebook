import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts, getCurrentUser } from '../redux/contactsApi'; 
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Route, Switch } from 'react-router-dom';

import Register from './Register';t
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
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/contacts">
          <div>
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </div>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
