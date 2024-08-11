import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b349e87fba54a5b7ec4cdd.mockapi.io',
});

export const requestContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addingContact = async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
};

export const deletingContact = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};
