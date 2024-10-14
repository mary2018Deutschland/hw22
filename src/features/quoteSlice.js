import { createSlice } from '@reduxjs/toolkit';
import { getQuotes } from './actionCreaters';

const initialState = {
  quotes: [],
  author: '',
  status: '',
  error: null,
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getQuotes.pending, (state, action) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(getQuotes.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.error = null;
        state.quotes = action.payload;
      })
      .addCase(getQuotes.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
        state.quotes = [];
      });
  },
});

export default quoteSlice.reducer;
