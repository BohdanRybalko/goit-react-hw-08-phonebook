
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../redux/contactsApi';
import { selectFilteredContacts } from '../redux/contactsSelectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectFilteredContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div>
      {contacts.length > 0 && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="tel" name="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
          <button type="submit">Add contact</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
