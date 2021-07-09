import { createSlice } from "@reduxjs/toolkit";

// Each Post witll contain a comment and image
const initalState = {
  posts: [],
};

// Reducer adds post to post list
const postSlice = createSlice({
  name: "post",
  initialState: initalState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { setPosts } = postSlice.actions;

export const selectPosts = (state) => state.post.posts;

export default postSlice.reducer;
