import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUniquePost } from "../../redux";
import { InitialState } from "../../types";

export const useConnect = (postId: string | undefined) => {
  const dispatch = useDispatch();
  const post = useSelector((state: InitialState) => state.post);
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

  return { post, loading };
};
