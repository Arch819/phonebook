import axios from 'axios';
export const fetchGetContacts = async () => {
  const { data } = await axios('api/contacts');
  return data;
};
export const fetchAddContact = async contact => {
  const { data } = await axios.post('api/contacts', contact);
  return data;
};

export const fetchDeleteContact = async contactId => {
  await axios.delete(`api/contacts/${contactId}`);
};

export const fetchChangContact = async ({ contactId, inputValue }) => {
  const { data } = await axios.patch(`api/contacts/${contactId}`, inputValue);
  return data;
};
