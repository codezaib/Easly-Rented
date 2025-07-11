import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
const initialState = {
  categories: [],
  subcategories: [],
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
export const getSubCategories = createAsyncThunk(
  "category/sub",
  async (category_id, thunkApi) => {
    try {
      const { data: result } = await customFetch.get(
        `/category/allSubcategories/${category_id}`
      );
      if (!result) {
        console.log("could not get sub categories");
      }
      return result.data;
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
      })
      .addCase(getSubCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isFetched = true;
        state.subcategories = payload;
      })
      .addCase(getSubCategories.rejected, (state) => {
        state.isFetched = true;
        state.isLoading = false;
      });
  },
});

export default categorySlice.reducer;
