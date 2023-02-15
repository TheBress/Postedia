import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InitialState, User } from "../../types";

export const useConnect = (userId: string | undefined) => {
  const [user, setUser] = useState<User>();
  const path = window.location.pathname;
  const { _id } = useSelector((state: InitialState) => state.user);
  const userFriends = useSelector((state: InitialState) => state.userFriends);

  const isFriend = userFriends.some((friend) => friend._id === _id);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/views`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userProfileId: userId, userId: _id }),
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId, path, _id]);

  return { user, isFriend };
};
