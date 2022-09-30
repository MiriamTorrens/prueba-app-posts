import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import loginReducer from "../features/loginSlice";
import signupReducer from "../features/signupSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    login: loginReducer,
    signup: signupReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
