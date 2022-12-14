import { configureStore } from '@reduxjs/toolkit';
import tickerReducer from '../slices/tickerSlice';

export const store = configureStore( {
  reducer: {
    ticker: tickerReducer,
  },
} );
