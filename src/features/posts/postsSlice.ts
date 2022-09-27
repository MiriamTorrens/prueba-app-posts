import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostType, UserType } from '../../types';
import axios from 'axios';
import type { RootState } from '../../app/store';
import { toast } from 'react-toastify';
interface PostState {
  postList: PostType[];
  singlePost: PostType;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PostState = {
  postList: [],
  singlePost: {
    id: 0,
    userId: 0,
    title: "",
    body: ""
  },
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
      toast.success('Post eliminado', {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000
      });
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
       .addCase(getPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.status = 'idle';
        state.singlePost = action.payload;
      })
      .addCase(getPost.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

export const { deletePost } = postsSlice.actions;
export const posts = (state: RootState) => state.posts.postList;
export const post = (state: RootState) => state.posts.singlePost;
export default postsSlice.reducer;
