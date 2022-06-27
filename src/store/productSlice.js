import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const res = await axios.get('http://localhost:8080/products');
  return res?.data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});

export default productSlice.reducer;
