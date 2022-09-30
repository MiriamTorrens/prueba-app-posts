import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostType, UserType } from "../types";
import axios from "axios";
import type { RootState } from "../app/store";
import { toast } from "react-toastify";
interface PostState {
  postList: PostType[];
  singlePost: PostType;
  status: "idle" | "loading" | "failed";
}

const initialState: PostState = {
  postList: [],
  singlePost: {
    id: 0,
    userId: 0,
    title: "",
    body: "",
  },
  status: "idle",
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(getPosts.pending, (state) => {
  //         state.status = 'loading';
  //       })
  //       .addCase(getPosts.fulfilled, (state, action) => {
  //         state.status = 'idle';
  //         state.postList = action.payload;
  //       })
  //       .addCase(getPosts.rejected, (state) => {
  //         state.status = 'failed';
  //       })
  //   },
});

// export const {  } = signupSlice.actions;
// export const posts = (state: RootState) => state.posts.postList;
export default signupSlice.reducer;
