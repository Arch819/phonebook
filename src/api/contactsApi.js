import axios from 'axios';
export const fetchGetContacts = async () => {
  const { data } = await axios('contacts');
  return data;
};
export const fetchAddContact = async contact => {
  const { data } = await axios.post('contacts', contact);
  return data;
};

export const fetchDeleteContact = async id => {
  await axios.delete(`contacts/${id}`);
};

export const fetchChangContact = async ({ id, inputValue }) => {
  const { data } = await axios.patch(`contacts/${id}`, inputValue);
  return data;
};
