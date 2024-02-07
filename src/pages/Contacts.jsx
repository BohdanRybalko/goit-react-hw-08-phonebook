import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactForm from '../contact/ContactForm';
import ContactList from '../contact/ContactList';
import Filter from '../contact/Filter';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: '',
    number: '',
  });

  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://connections-api.herokuapp.com/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddContact = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://connections-api.herokuapp.com/contacts', newContact);
      setContacts([...contacts, response.data]);
      setNewContact({
        name: '',
        number: '',
      });
    } catch (error) {
      console.error('Error adding contact', error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`https://connections-api.herokuapp.com/contacts/${id}`);
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact', error);
    }
  };

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
