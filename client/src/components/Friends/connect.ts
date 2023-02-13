import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "../../types";
import { useNavigate } from "react-router-dom";
import { setFriends, setUserFriends } from "../../redux";
import { useEffect } from "react";

export const useConnect = (friendId?: string, userId?: string) => {
  const { _id } = useSelector((state: InitialState) => state.user);
  const friends = useSelector((state: InitialState) => state.user.friends);
  const userFriends = useSelector((state: InitialState) => state.userFriends);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path: string = window.location.pathname;
  const isProfile = path.includes("profile");

  const isUser: boolean = friendId === _id;

  const isFriend: boolean = Boolean(
    friends.find((friend) => friend._id === friendId)
  );

  const goToFriend = (): void => {
    !isUser ? navigate(`/profile/${friendId}`) : navigate(`/`);
  };

  const patchFriend = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/${_id}/${friendId}/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    dispatch(setFriends({ friends: data.user }));
    dispatch(setUserFriends({ friends: data.friend }));
  };

  useEffect(() => {
    const getFriends = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/friends/${userId}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      if (!isProfile) dispatch(setFriends({ friends: data }));
      else dispatch(setUserFriends({ friends: data }));
    };

    if (userId) getFriends();
  }, [userId, isProfile, dispatch]);

  return {
    isFriend,
    patchFriend,
    isUser,
    goToFriend,
    friends: isProfile ? userFriends : friends,
    _id,
    isProfile,
  };
};
