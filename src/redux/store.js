import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './books/bookSlice';
import categoriesReducer from './cartegories/categories';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoriesReducer,

  },
});

export default store;
