import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../../redux";
import { InitialState, Post } from "../../../types";

export const useConnect = () => {
  const user = useSelector((state: InitialState) => state.user);
  const { picturePath } = user;
  const dispatch = useDispatch();

  const [post, setPost] = useState<Post>({
    _id: "",
    userId: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    location: user.location,
    description: "",
    picturePath: "",
    userPicturePath: user.picturePath,
    likes: [],
    comments: [],
    updatedAt: "",
    isEdited: false,
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const posts = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then((res) => {
      return res.json();
    });

    setPost({ ...post, description: "" });

    if (posts) dispatch(setPosts({ posts }));
  };

  return { post, handleChange, handleSubmit, picturePath };
};
