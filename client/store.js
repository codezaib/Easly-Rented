import { configureStore } from "@reduxjs/toolkit";
import cart from "./src/features/Cart/CartSlice";
const store = configureStore({
  reducer: {
    cart,
  },
});

export default store;
