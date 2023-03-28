import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.registerUser.fulfilled](state, action) {},
  },
});

export default authSlice.reducer;
