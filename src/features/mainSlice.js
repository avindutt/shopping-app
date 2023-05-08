import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

 const initialState = {
    products: [],
    favourites: [],
    productDetail: [],
    cart: [],
    newProduct: []
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
            state.newProduct = state.newProduct.filter((item) => item.id !== action.payload);
            toast("Item deleted from List", {autoClose: 2300, draggablePercent: 60});
        },

        favItem: (state, action) => {
            state.favourites = [...state.favourites, action.payload]
            toast("Hurray! Item added to Wishlist", {autoClose: 2300, draggablePercent: 60});
        },

        removeFavItem: (state, action) => {
            state.favourites = state.favourites.filter((item) => {
                return item.id != action.payload;
            })
            toast("Item removed from Wishlist", {autoClose: 2300, draggablePercent: 60});
        },

        setProductDetail: (state, action) => {
            state.productDetail = action.payload;
            console.log(state.productDetail);
        },

        addToCart: (state, action) => {
            // collecting the values passed by dispatch by destructuring
            const { item, size } = action.payload;
            const itemWithSize = {...item, size: size};
            state.cart = [...state.cart, itemWithSize];
        },

        removeCart: (state, action) => {
            state.cart = state.cart.filter((item) => {
                return item.id != action.payload;
            })
            toast("Item removed from Cart", {autoClose: 2300, draggablePercent: 60});
        },
        addProduct: (state, action) => {
            state.newProduct = [...state.newProduct, action.payload];
        }
    }
});

export const {apiData, sort, deleteItem, favItem, setProductDetail, removeFavItem, addToCart, removeCart, addProduct} = mainSlice.actions;

export default mainSlice.reducer;