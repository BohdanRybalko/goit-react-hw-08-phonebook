import axios from 'axios';

export const fetchContacts = async () => {
    try {
      const response = await axios.get('https://connections-api.herokuapp.com/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts', error);
    }
  };

  

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