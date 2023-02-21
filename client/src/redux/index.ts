import { createSlice } from "@reduxjs/toolkit";
import { emptyPost, emptyUser } from "../functions";
import { InitialState } from "../types";

const initialState: InitialState = {
  user: emptyUser(),
  posts: [],
  token: "",
  isEdited: false,
  userFriends: [],
  post: emptyPost(),
  requestsReceived: [],
  requestsSent: [],
  notifications: [],
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
    setUserFriends: (state, action) => {
      if (state.user) {
        state.userFriends = action.payload.friends;
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
    setUniquePost: (state, action) => {
      state.post = action.payload.post;
    },

    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setUserRequestsReceived: (state, action) => {
      state.requestsReceived = action.payload.requests;
    },
    setUserRequestsSent: (state, action) => {
      state.requestsSent = action.payload.requests;
    },
    setUserNotifications: (state, action) => {
      state.notifications = action.payload.notifications;
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
  setUserFriends,
  setUniquePost,
  setUserRequestsReceived,
  setUserNotifications,
  setUserRequestsSent,
} = authSlice.actions;
export default authSlice.reducer;
