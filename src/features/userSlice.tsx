import React from 'react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';


export const userSlice = createSlice ({
  name: 'user',
  initialState : {
    user: null,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state :RootState) => state.user.user;

export default userSlice.reducer;