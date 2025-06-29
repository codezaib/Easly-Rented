import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  cartShown: false,
  cartItems: [{}, {}],
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartState: (state, { payload }) => {
      state.cartShown = payload;
    },
    addToCart: (state, { payload }) => {
      state.cartItems = [...state.cartItems, payload];
      state.totalAmount += state.payload.price;
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => {
        return payload.id != item.id;
      });
    },
  },
});

export const { cartState, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
