import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetStates } from "../../functions";
import { setProfileUser } from "../../redux";

export const useConnect = (userId: string | undefined) => {
  const dispatch = useDispatch();
  const path = window.location.pathname;
  const { userFriends, user, profileUser } = GetStates();

  const isFriend = userFriends.some((friend) => friend._id === user._id);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/views`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userProfileId: userId, userId: user._id }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(setProfileUser({ user: data })));
  }, [userId, path, user._id, dispatch]);

  return {
    user: profileUser,
    isFriend,
    isShow: profileUser.isPublic || isFriend,
  };
};
