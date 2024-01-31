
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../redux/contactsApi';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!user) {
     
      console.log('Please log in or register.');
      return;
    }


    dispatch(addContact({ id: nanoid(), name, number, userId: user.id }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="tel" name="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
