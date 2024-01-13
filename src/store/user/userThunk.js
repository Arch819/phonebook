import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';
import { updateProfile } from 'api/userApi';

const { fetchSignup, fetchLogin, fetchRefresh, fetchLogout } = api.userApi;

export const registrationThunk = createAsyncThunk(
  'user/registration',
  async (body, { rejectWithValue }) => {
    try {
      const data = await fetchSignup(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  'user/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await fetchLogin(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const refreshThunk = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const data = await fetchRefresh(persistedToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const logoutThunk = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchLogout();
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateProfileThunk = createAsyncThunk(
  'user/update',
  async (file, { rejectWithValue }) => {
    try {
      console.log(file);
      const formData = new FormData();
      formData.append('avatarURL', file);
      console.log(formData);
      const data = await updateProfile(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
