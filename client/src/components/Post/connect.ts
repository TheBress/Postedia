import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux";
import { InitialState, Post } from "../../types";

export const useConnect = (post: Post) => {
  const fullName: string = `${post.firstName} ${post.lastName}`;
  const { _id } = useSelector((state: InitialState) => state.user);
  const dispatch = useDispatch();

  const likeCount: number = Object.keys(post.likes).length;

  const isLiked = Object.keys(post.likes).some((value) => value === _id);

  const likePost = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${post._id}/like`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: _id }),
      }
    );
    const posts = await response.json();
    dispatch(setPosts({ posts: posts }));
  };

  return { fullName, likeCount, likePost, isLiked };
};
