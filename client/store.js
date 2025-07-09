import { configureStore } from "@reduxjs/toolkit";
import cart from "./src/features/Cart/CartSlice";
import products from "./src/features/Products/ProductSlice";
import user from "./src/features/User/UserSlice";
import categories from "./src/features/Category/CategorySlice";
const store = configureStore({
  reducer: {
    user,
    cart,
    products,
    categories,
  },
});

export default store;
