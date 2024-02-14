import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createuser, logindetail } from "./authapi";
const initialState = {
  user: null,
  error: null,
};

export const authslice = createAsyncThunk(
  "createuser/authapi",
  async (user) => {
    const response = await createuser(user);
    return response.data;
  }
);
export const authlogin = createAsyncThunk(
  "createuser/authlogin",
  async (user) => {
    const response = await logindetail(user);
    return response.data;
  }
);
export const authenslice = createSlice({
  name: "createuser",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authslice.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(authlogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(authlogin.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const authError = (state) => state.auth.error;
export const loggedInUser = (state) => state.auth.user;

export default authenslice.reducer;
