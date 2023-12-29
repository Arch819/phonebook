import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';
const {
  fetchGetContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchChangContact,
} = api.contactApi;

export const getContactThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchGetContacts();
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contact/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await fetchAddContact(contact);
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contact/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await fetchDeleteContact(id);
      return id;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
export const changeContactThunk = createAsyncThunk(
  'contact/changeContact',
  async (body, { rejectWithValue }) => {
    try {
      const data = await fetchChangContact(body);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
