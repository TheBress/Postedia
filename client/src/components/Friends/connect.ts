import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends, setUserFriends, setUserRequestsSent } from "../../redux";
import { useEffect } from "react";
import { GetStates, successToast } from "../../functions";

export const useConnect = (friendId?: string, userId?: string) => {
  const { user, friends, userFriends, requestsSent } = GetStates();
  const { _id } = user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path: string = window.location.pathname;
  const isProfile = path.includes("profile");

  const isUser: boolean = friendId === _id;

  const isFriend: boolean = friends.some((friend) => friend._id === friendId);

  const isRequest: boolean = requestsSent.some(
    (request) => request.userReceivedId === friendId
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
    dispatch(setUserRequestsSent({ requests: data.requests }));

    if (data.action === "ADD") successToast("You have a new friend!");
    if (data.action === "REMOVE") successToast("Friend removed successfully");
    if (data.action === "REQUEST") successToast("Request sent succesfully");
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
    isRequest,
  };
};
