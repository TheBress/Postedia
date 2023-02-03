import { createSlice } from "@reduxjs/toolkit";
import { emptyUser } from "../functions";
import { InitialState } from "../types";

const initialState: InitialState = {
  user: emptyUser(),
  posts: [],
  token: "",
  isEdited: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.token = "";
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setIsEdited: (state) => {
      state.isEdited = !state.isEdited;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const {
  setUser,
  setFriends,
  setPosts,
  setLogin,
  setIsEdited,
  setLogout,
  setPost,
} = authSlice.actions;
export default authSlice.reducer;
