import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    cartQuantity: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cartItems = [action.payload]; // Push payload to cartItems array
            state.cartQuantity = state.cartQuantity + 1;
        },

        setRemoveCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item !== action.payload);
            state.cartQuantity = state.cartQuantity - 1;
        },
    },
});

export const { setCart, setRemoveCart } = cartSlice.actions;
export default cartSlice.reducer;
