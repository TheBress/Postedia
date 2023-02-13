import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../functions";
import { setPost } from "../../redux";
import { InitialState, Post } from "../../types";

export const useConnect = (post: Post) => {
  const [isComment, setisComment] = useState<boolean>(false);
  const [isUpdate, setisUpdate] = useState<boolean>(false);
  const fullName: string = `${post.firstName} ${post.lastName}`;
  const { _id } = useSelector((state: InitialState) => state.user);
  const dispatch = useDispatch();

  const likeCount: number = Object.keys(post.likes).length;

  const changeIsComment = () => {
    setisComment(!isComment);
  };

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
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return {
    fullName,
    likeCount,
    likePost,
    isLiked,
    _id,
    isComment,
    changeIsComment,
    updatedAt: formatDate(post.updatedAt),
    isUpdate,
    setisUpdate,
  };
};
