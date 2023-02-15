import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatDate, getIsPost } from "../../functions";
import { setPost, setUniquePost } from "../../redux";
import { InitialState, Post } from "../../types";

export const useConnect = (post: Post) => {
  const [isComment, setisComment] = useState<boolean>(false);
  const [isUpdate, setisUpdate] = useState<boolean>(false);
  const navigate = useNavigate();
  const fullName: string = `${post.firstName} ${post.lastName}`;
  const { _id } = useSelector((state: InitialState) => state.user);
  const dispatch = useDispatch();
  const isPost = getIsPost();

  const likeCount: number = Object.keys(post.likes).length;

  const changeIsComment = (): void => {
    setisComment(!isComment);
  };

  const goToPost = (): void => {
    navigate(`/post/${post._id}`);
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
    if (!isPost) dispatch(setPost({ post: updatedPost }));
    else dispatch(setUniquePost({ post: updatedPost }));
  };

  return {
    fullName,
    likeCount,
    likePost,
    isLiked,
    _id,
    isComment,
    changeIsComment,
    updatedAt: !post.isEdited
      ? formatDate(post.createdAt)
      : formatDate(post.lastUpdated),
    isUpdate,
    setisUpdate,
    goToPost,
  };
};
