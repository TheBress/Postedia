import { useEffect, useState } from "react";
import { User } from "../types";

export const GetUser = () => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.REACT_APP_API_URL}/users/${localStorage.getItem(
        "POSTEDIA_TOKEN"
      )}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading, error };
};
