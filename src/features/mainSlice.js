import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    products: []
 };

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        apiData: (state, action) => {
            state.products = action.payload
        },  
        deleteItem: (state, action) => {
            state.products = state.products.filter((item) => {
                return item.id != action.payload;
            });
        }
    }
});

export const {apiData, deleteItem} = mainSlice.actions;

export default mainSlice.reducer;