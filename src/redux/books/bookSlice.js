import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/H4on2RhGhmoYwzo3vLBp/books';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/M7CSX9j8jMgRuO6kDbwV/books';

export const getBooks = createAsyncThunk('books/getbooks', async (thunkAPI) => {
  try {
    const response = await axios(url);
    const dataArray = Object.values(response.data);
    // console.log(dataArray[2][0].author);
    const finArray = [];
    
    dataArray.forEach((data) => {
      finArray.push(data[0]);
    });
    // console.log(finArray);
    return finArray;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});
const initialState = {
  books: [],
};
const BookSlice = createSlice({
  name: 'booksCount',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const indexToRemove = action.payload;
      state.books = state.books.filter((book) => book.item_id !== indexToRemove);
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      // console.log(state.books);
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, removeBook } = BookSlice.actions;
export default BookSlice.reducer;
