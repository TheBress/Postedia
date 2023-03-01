import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetStates } from "../../functions";
import { setUniquePost } from "../../redux";

export const useConnect = (postId: string | undefined) => {
  const dispatch = useDispatch();
  const { user, post } = GetStates();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/posts/post/${postId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.msg) {
          dispatch(setUniquePost({ post: data }));
        }
      })
      .finally(() => {
        setLoading(true);
      });
  }, [postId, dispatch]);

  return { post, loading, userId: user._id };
};
