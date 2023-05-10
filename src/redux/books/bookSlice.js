import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};
const bookSlice = createSlice({
  name: 'booksCount',
  initialState,
  reducers: {
    add: (state, action) => {
      state.books = state.books.push(action.payload);
    },
    remove: (state, action) => {
      const indexToRemove = action.payload;
      state.books = state.books.slice(indexToRemove, indexToRemove + 1);
    },
  },
});

export const { add, remove } = bookSlice.actions;
export default bookSlice.reducer;
