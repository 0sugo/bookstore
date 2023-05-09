import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books:[],
}
const bookSlice = createSlice({
    name:booksCount,
    initialState,
    reducers:{
        increment:(state)=>{
           state.books.push('kk'); 

        },
        decrement:(state,indexToRemove)=>{
            state.books.slice(indexToRemove,1);

        }
    }
});

export const {increment , decrement } = bookSlice.actions;
export default bookSlice;