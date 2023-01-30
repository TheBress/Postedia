import { useEffect, useState } from "react";
import { Post } from "../types";

export const GetPosts = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/posts`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
};
