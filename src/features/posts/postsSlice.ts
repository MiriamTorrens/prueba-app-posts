import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostType } from '../../types';
import axios from 'axios';
import type { RootState } from '../../app/store';
interface PostState {
  postList: PostType[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PostState = {
  postList: [],
  status: 'idle',
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  },
);
export const getPost = createAsyncThunk(
  'posts/getPost',
  async (id:number) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  },
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    deletePost(state, action) {
      state.postList = state.postList.filter((d) => d.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.postList = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

export const { deletePost } = postsSlice.actions;
export const posts = (state: RootState) => state.posts.postList;
export default postsSlice.reducer;
