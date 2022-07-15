import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { API_URL } from './api';

export const register = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
  try {
    const token = await axios.post(`${API_URL}/auth/register`, data);
    localStorage.setItem('token', token.data);
    return token.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  try {
    const token = await axios.post(`${API_URL}/auth/login`, data);
    localStorage.setItem('token', token.data);
    return token.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    name: '',
    email: '',
    _id: '',
    token: localStorage.getItem('token') || null,
    status: null,
  },
  reducers: {
    authUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);

        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user.id,
          loading: false,
          status: 'success',
          isAuthenticated: true,
        };
      }
    },

    logoutUser(state, action) {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        name: '',
        email: '',
        _id: '',
        status: 'null',
        isAuthenticated: false,
      };
    },
  },
  extraReducers: {
    [register.pending]: (state, action) => {
      return { ...state, status: 'loading' };
    },
    [register.fulfilled]: (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);

        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user.id,
          loading: false,
          status: 'success',
          isAuthenticated: true,
        };
      }
    },
    [register.rejected]: (state, action) => {
      return { ...state, error: action.payload, loading: false, status: 'error' };
    },

    [login.pending]: (state, action) => {
      return { ...state, status: 'loading' };
    },
    [login.fulfilled]: (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);

        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user.id,
          loading: false,
          status: 'success',
          isAuthenticated: true,
        };
      }
    },
    [login.rejected]: (state, action) => {
      return { ...state, error: action.payload, loading: false, status: 'error' };
    },
  },
});

export const { authUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
