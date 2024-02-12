import React, { useState } from 'react';
import ContactForm from '../contact/ContactForm';
import ContactList from '../contact/ContactList';
import Filter from '../contact/Filter';
import { useEffect } from 'react';
import { fetchTasks } from '../redux/contacts/operations';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: '',
    number: '',
  });

useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  

  return (
    <div>
      <h2>Contacts</h2>
      <Filter />
      <ContactForm
        name={newContact.name}
        number={newContact.number}
        onAddContact={handleAddContact}
        onNameChange={(e) => handleChange(e, 'name')}
        onNumberChange={(e) => handleChange(e, 'number')}
      />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default Contacts;
