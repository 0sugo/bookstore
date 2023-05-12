import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/H4on2RhGhmoYwzo3vLBp/books';

export const getBooks = createAsyncThunk('books/getbooks', async (thunkAPI) => {
  try {
    const response = await axios(url);
    const booksWithId = Object.entries(response.data).map(([id, book]) => ({
      id,
      book: book[0],
    }));
    return booksWithId;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const addBooksToApi = createAsyncThunk('book/addbooks', async ({ ...bookObj }, thunkAPI) => {
  const newBook = { ...bookObj };
  try {
    await axios.post(url, newBook);
    const response = thunkAPI.dispatch(getBooks());
    return response;
  } catch (error) {
    throw new Error('could not add book at the moment');
  }
});

export const deleteBooksFromApi = createAsyncThunk('booktodelete', async (itemId) => {
  const deleteUrl = (`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/H4on2RhGhmoYwzo3vLBp/books/${itemId}`);
  try {
    await axios.delete(deleteUrl);
    return itemId;
  } catch (error) {
    throw new Error('Error deleting the book');
  }
});
const initialState = {
  books: [],
  isLoading: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addBooksToApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBooksToApi.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addBooksToApi.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBooksFromApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBooksFromApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = state.books.filter((book) => book.id !== action.payload);
      })
      .addCase(deleteBooksFromApi.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addBook, removeBook } = BookSlice.actions;
export default BookSlice.reducer;
