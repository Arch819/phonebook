import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registrationThunk,
} from './userThunk';
import {
  handleLogoutFulfilled,
  handleRefreshFulfilled,
  handleRefreshPending,
  handleRefreshRejected,
  handleUserFulfilled,
} from './userHelpers';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleUserFulfilled)
      .addCase(loginThunk.fulfilled, handleUserFulfilled)
      .addCase(refreshThunk.fulfilled, handleRefreshFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addCase(refreshThunk.pending, handleRefreshPending)
      .addCase(refreshThunk.rejected, handleRefreshRejected);
  },
});

export const userReducer = userSlice.reducer;
