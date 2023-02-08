import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPost } from "../../../redux";
import { InitialState, UpdateComment } from "../../../types";

export const useConnect = (postId?: string) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: InitialState) => state.user);
  const [comment, setComment] = useState<UpdateComment>({
    idUser: user._id,
    comment: "",
  });

  const goToProfile = (id: string) => {
    navigate(`/profile/${id}`);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setComment({
      ...comment,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedPost = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${postId}/comment`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      }
    ).then((res) => {
      return res.json();
    });

    setComment({ ...comment, comment: "" });

    if (updatedPost) dispatch(setPost({ post: updatedPost }));
  };

  return { goToProfile, handleSubmit, handleChange, comment };
};
