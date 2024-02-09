import axios from 'axios';

axios.defaults.baseURL = 'https://phonebook-arch.onrender.com';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const deleteToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const fetchLogin = async body => {
  const { data } = await axios.post('users/login', body);
  setToken(data.token);
  return data;
};
export const fetchSignup = async body => {
  const { data } = await axios.post('users/register', body);
  setToken(data.token);
  return data;
};

export const fetchLogout = async () => {
  const response = await axios.post('users/logout');
  deleteToken();
  return response;
};

export const fetchRefresh = async token => {
  setToken(token);
  const { data } = await axios('users/current');

  return data;
};

export const updateProfile = async formData => {
  console.log(formData);
  const { data } = await axios.patch('users/avatars', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });
  console.log(data);
  return data.avatarURL;
};
