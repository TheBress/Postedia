import { useDispatch } from "react-redux";
import { setPosts } from "../../../../redux";

export const useConnect = (postId?: string) => {
  const dispatch = useDispatch();
  const deletePost = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${postId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    dispatch(setPosts({ posts: data }));
  };

  return { deletePost };
};
