import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const products = createAsyncThunk('products/getAll', async () => {
  const response = await axios.get('http://localhost:3000/products');
  console.log(response)
  return response.data;
});

const productSlice = createSlice({
  name: 'productsData',
  initialState: {
  data: {},
  status: 'idle',
  error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(products.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
  },
});

export default productSlice.reducer;



