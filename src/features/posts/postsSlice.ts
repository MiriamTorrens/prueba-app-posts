import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "../../types";
import axios from "axios";
import type { RootState } from "../../app/store";
import { toast } from "react-toastify";
import { styleToast } from "../../styles/styleToast";
interface PostState {
  postList: PostType[];
  status: "idle" | "loading" | "failed";
}

const initialState: PostState = {
  postList: [],
  status: "idle",
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (!err?.response) {
        console.log("No Server Response");
      }
    }
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost(state, action: PayloadAction<number>) {
      state.postList = state.postList.filter((p) => p.id !== action.payload);
      toast.success("Post eliminado", styleToast);
    },
    updatePost(state, action: PayloadAction<PostType>) {
      const { payload } = action;
      const { id, body } = payload;
      state.postList = state.postList.map((post) =>
        post.id === id ? { ...post, body } : post
      );
      toast.success("Post actualizado", styleToast);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.postList = action.payload
          .slice()
          .sort((a: PostType, b: PostType) => a.title.localeCompare(b.title));
      })
      .addCase(getPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { deletePost, updatePost } = postsSlice.actions;
export const posts = (state: RootState) => state.posts.postList;
export const status = (state: RootState) => state.posts.status === "loading";
export default postsSlice.reducer;
