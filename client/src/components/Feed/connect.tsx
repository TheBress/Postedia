import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux";
import { InitialState } from "../../types";

export const useConnect = (userId?: string) => {
  const dispatch = useDispatch();
  const posts = useSelector((state: InitialState) => state.posts);
  const { _id } = useSelector((state: InitialState) => state.user);
  const path = window.location.pathname;

  useEffect(() => {
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

    const getPosts = async () => {
      const posts = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        return res.json();
      });

      if (posts) dispatch(setPosts({ posts }));
    };

    !userId ? getPosts() : getUserPosts();
  }, [path, userId, dispatch]);

  return { posts, _id };
};
