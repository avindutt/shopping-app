import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

 const initialState = {
    products: [],
    favourites: [],
    productDetail: []
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
            toast("Item deleted from List", {autoClose: 2300, draggablePercent: 60});
        },
        favItem: (state, action) => {
            state.favourites = [...state.favourites, action.payload]
            console.log(state.favourites);
            toast("Hurray! Item added to Wishlist", {autoClose: 2300, draggablePercent: 60});
        },
        setProductDetail: (state, action) => {
            state.productDetail = action.payload;
            console.log(state.productDetail);
        }
    }
});

export const {apiData, deleteItem, favItem, setProductDetail} = mainSlice.actions;

export default mainSlice.reducer;