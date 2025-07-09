import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import Swal from "sweetalert2";
export const register = createAsyncThunk(
  "user/register",
  async (data, thunkApi) => {
    try {
      const { data: result } = await customFetch.post("/auth/register", {
        ...data,
        role: "user",
      });
      if (result.user) {
        Swal.fire({
          position: "top-end",
          timer: 2000,
          icon: "success",
          title: "Successfuly registered",
        });
      }
      return result.user;
    } catch (error) {
      Swal.fire({ icon: "error", title: "Couldn't register" });
    }
  }
);
export const login = createAsyncThunk("user/login", async (user, thunkApi) => {
  try {
    const { data: result } = await customFetch.post("/auth/login", user);
    if (result.user) {
      Swal.fire({
        position: "top-end",
        timer: 2000,
        icon: "success",
        title: "Successfuly logged in",
      });
    }
    return result.user;
  } catch (error) {
    Swal.fire({ icon: "error", title: "Couldn't login" });
  }
});
export const logout = createAsyncThunk(
  "user/logout",
  async (__dirname, thunkApi) => {
    try {
      const { data: result } = await customFetch.get("/auth/logout");
      if (result) {
        Swal.fire({
          position: "top-end",
          timer: 2000,
          icon: "success",
          title: "Successfuly logged out",
        });
      }
      return "ok";
    } catch (error) {
      Swal.fire({ icon: "error", title: "Couldn't logout" });
    }
  }
);
export const getUser = createAsyncThunk("user/single", async (_, thunkApi) => {
  try {
    const { data: result } = await customFetch.get("/user/showMe");
    return result.user;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue(
      error.response.data.message || "couldn't get user"
    );
  }
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading: false,
    isFetched: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isFetched = true;
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isFetched = true;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isFetched = true;
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isFetched = true;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isFetched = true;
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
        state.isFetched = true;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.isFetched = true;
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.isFetched = true;
      });
  },
});

export default userSlice.reducer;
