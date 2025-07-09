import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
const initialState = {
  categories: [],
  isLoading: false,
  isFetched: false,
};
export const getCategories = createAsyncThunk(
  "category/all",
  async (_, thunkApi) => {
    try {
      const { data: result } = await customFetch.get("/category/allCategories");
      if (!result) {
        console.log("could not get categories");
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isFetched = true;
        state.categories = payload;
      })
      .addCase(getCategories.rejected, (state) => {
        state.isFetched = true;
        state.isLoading = false;
      });
  },
});

export default categorySlice.reducer;
