import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
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
