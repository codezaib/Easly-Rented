import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (product, thunkApi) => {
    try {
    } catch (error) {}
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product, thunkApi) => {
    try {
    } catch (error) {}
  }
);
export const deleteProduct = createAsyncThunk(
  "product/updateProduct",
  async (product, thunkApi) => {
    try {
    } catch (error) {}
  }
);
export const getProducts = createAsyncThunk(
  "product/updateProduct",
  async (product, thunkApi) => {
    try {
      const {data: result} = await customFetch.get('/product/sortproducts')
    } catch (error) {}
  }
);
const initialState = {
  products: [],
  isLoading: false,
  isFetched: false,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.isLoading = false;
        state.isFetched = true;
      })
      .addCase(createProduct.rejected, (state) => {
        state.isFetched = true;
        state.isLoading = false;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isFetched = true;
        state.products = payload;
      })
      .addCase(getProducts.pending, (state) => {
        state.isFetched = true;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isFetched = true;
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
