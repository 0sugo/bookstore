import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './books/bookSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,

  },
});

export default store;
