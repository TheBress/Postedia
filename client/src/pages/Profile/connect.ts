import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetStates } from "../../functions";
import { User } from "../../types";

export const useConnect = () => {
  const { userId } = useParams();

  const [profileUser, setProfileUser] = useState<User>();
  const path = window.location.pathname;
  const { userFriends, user } = GetStates();

  const isFriend = userFriends.some((friend) => friend._id === user._id);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/views`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userProfileId: userId, userId: user._id }),
    })
      .then((res) => res.json())
      .then((data) => setProfileUser(data));
  }, [userId, path, user._id]);

  return {
    user: profileUser,
    isFriend,
    isShow: profileUser?.isPublic || isFriend,
  };
};
