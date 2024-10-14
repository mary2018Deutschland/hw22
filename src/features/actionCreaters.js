import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getQuotes = createAsyncThunk('quotes/getQuotes', async () => {
  try {
    const response = await axios.get('https://dummyjson.com/quotes');
    return response.data['quotes'][Math.floor(Math.random() * 30)];
  } catch (error) {
    throw new Error(error);
  }
});
