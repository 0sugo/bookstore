import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/H4on2RhGhmoYwzo3vLBp/books';

const getBooks = createAsyncThunk('books/getbooks',async (thunkAPI)=>{
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong')
    
  }
});
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
  extraReducers:{
    [getBooks.pending]:(state)=>{
      state.isLoading =true;
    },
    [getBooks.fulfilled]:(state)=>{
      state.isLoading =false;
    },
    [getBooks.rejected]:(state)=>{
      state.isLoading =false;
    },
  }
});

export const { addBook, removeBook } = BookSlice.actions;
export default BookSlice.reducer;
