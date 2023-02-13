import { useState } from "react";
import { useDispatch } from "react-redux";
import { getIsPost } from "../../../functions";
import { setPosts, setUniquePost } from "../../../redux";
import { UpdatePost } from "../../../types/props";

export const useConnect = (
  post: string,
  id: string,
  setIsUpdate?: (value: boolean) => void
) => {
  const [updatePost, setUpdatePost] = useState<UpdatePost>({
    description: post,
  });
  const dispatch = useDispatch();
  const isPost = getIsPost();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUpdatePost({
      ...updatePost,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const posts = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${id}/update/${isPost}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatePost),
      }
    ).then((res) => {
      return res.json();
    });

    if (posts) {
      if (!isPost) dispatch(setPosts({ posts }));
      else dispatch(setUniquePost({ post: posts }));
    }
    if (setIsUpdate) setIsUpdate(false);
  };

  return { updatePost, handleChange, handleSubmit };
};
