import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categoriesReducer from './cartegories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoriesReducer,

  },
});

export default store;
