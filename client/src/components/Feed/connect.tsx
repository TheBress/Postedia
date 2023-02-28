import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetStates } from "../../functions";
import { setPosts } from "../../redux";

export const useConnect = (userId?: string) => {
  const dispatch = useDispatch();
  const { posts, user } = GetStates();
  const { _id } = user;

  const path: string = window.location.pathname;

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

      dispatch(setPosts({ posts }));
    };

    const getPosts = async () => {
      const posts = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        return res.json();
      });

      dispatch(setPosts({ posts }));
    };

    !userId ? getPosts() : getUserPosts();
  }, [path, userId, dispatch]);

  return { posts, _id };
};
