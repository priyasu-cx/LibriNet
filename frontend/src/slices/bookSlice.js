import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bookInfo: JSON.parse(localStorage.getItem('bookInfo')) || null,
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBooks(state, action) {
            state.bookInfo = action.payload;
            localStorage.setItem('bookInfo', JSON.stringify(action.payload));
        },
    }
});

export default bookSlice.reducer;
export const { setBooks } = bookSlice.actions;