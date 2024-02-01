
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Add New Contact</h3>
      <form onSubmit={handleAddContact}>
        <label>
          Name:
          <input type="text" name="name" value={newContact.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Number:
          <input type="tel" name="number" value={newContact.number} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default Contacts;
