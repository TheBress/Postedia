import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux";
import { InitialState } from "../../types";

export const useConnect = (userId?: string) => {
  const dispatch = useDispatch();
  const posts = useSelector((state: InitialState) => state.posts);
  const path = window.location.pathname;

  const getPosts = async () => {
    const posts = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      return res.json();
    });

    if (posts) dispatch(setPosts({ posts }));
  };

  const getUserPosts = async () => {
    const posts = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${userId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      return res.json();
    });

    if (posts) dispatch(setPosts({ posts }));
  };

  useEffect(() => {
    if (!userId) getPosts();
    else getUserPosts();
  }, [path, userId]);

  return { posts };
};
