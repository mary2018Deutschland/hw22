import { combineReducers } from 'redux';
import QuoteReducer from './features/quoteSlice';
import { configureStore } from '@reduxjs/toolkit';

const mainReducer = combineReducers({
  quotes: QuoteReducer,
});

export const store = configureStore({
  reducer: mainReducer,
});
