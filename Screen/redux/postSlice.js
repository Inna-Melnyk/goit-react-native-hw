import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const postsInitialState = {
  posts: [
  
  ],
};
export const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  reducers: {
    addPost: {
      reducer(state, { payload }) {
        state.posts = [];
      },
      prepare({
        photoName,
        photoUri,
        location = {},
        locationName,
        comments = [],
      }) {
        return {
          payload: {
            id: uuid.v4(),
            name: photoName,
            image: photoUri,
            location,
            country: locationName,
            comments,
          },
        };
      },
    },
    allPosts: {
      reducer(state, { payload }) {
        state.posts = payload;
      },
    },
  },
});

export const { addPost, allPosts} = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
