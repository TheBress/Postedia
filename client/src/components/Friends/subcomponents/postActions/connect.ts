import { useDispatch } from "react-redux";
import { getIsPost, successToast } from "../../../../functions";
import { setPosts } from "../../../../redux";

export const useConnect = (postId?: string) => {
  const dispatch = useDispatch();
  const isPost = getIsPost();
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
    successToast("Post deleted succesfully");
  };

  return { deletePost, isPost };
};
