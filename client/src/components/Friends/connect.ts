import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "../../types";
import { setFriends } from "../../redux";
import { useNavigate } from "react-router-dom";

export const useConnect = (friendId?: string, userId?: string) => {
  const friends = useSelector((state: InitialState) => state.user.friends);
  const navigate = useNavigate();

  const isProfile = window.location.pathname.includes("profile");

  const { _id } = useSelector((state: InitialState) => state.user);
  const dispatch = useDispatch();

  const isUser = friendId === _id;

  const id = isProfile ? _id : friendId;

  const isFriend = friends.some((friendM) => friendM._id === id);

  const goToFriend = () => {
    navigate(`/profile/${friendId}`);
    navigate(0);
  };

  const patchFriend = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/${_id}/${friendId}/${isProfile}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    dispatch(setFriends({ friends: data }));
  };

  const getFriends = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/friends/${userId}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  return { isFriend, patchFriend, friends, getFriends, isUser, goToFriend };
};
