import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchGetContacts = async () => {
  const { data } = await axios('contacts');
  return data;
};
export const fetchAddContact = async contact => {
  const { data } = await axios.post('contacts', contact);
  return data;
};

export const fetchDeleteContact = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
};

export const fetchChangContact = async ({ id, inputValue }) => {
  const { data } = await axios.patch(`contacts/${id}`, inputValue);
  return data;
};
