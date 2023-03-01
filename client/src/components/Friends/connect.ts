import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setFriends,
  setUserFriends,
  setUserRequestsReceived,
  setUserRequestsSent,
} from "../../redux";
import { useEffect } from "react";
import {
  getIsProfile,
  getIsRequest,
  GetStates,
  getToast,
  successToast,
} from "../../functions";

export const useConnect = (
  friendId?: string,
  userId?: string,
  isShow?: boolean
) => {
  const { user, friends, userFriends } = GetStates();
  const { _id } = user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isProfile = getIsProfile();

  const isUser: boolean = friendId === _id;

  const isFriend: boolean = friends.some((friend) => friend._id === friendId);

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
    dispatch(setUserRequestsSent({ requests: data.sentRequests }));
    dispatch(setUserRequestsReceived({ requests: data.receivedRequests }));

    getToast(data.action);
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

    if (isShow) getFriends();
  }, [dispatch, isProfile, userId, isShow]);

  return {
    isFriend,
    patchFriend,
    isUser,
    goToFriend,
    friends: isProfile ? userFriends : friends,
    _id,
    isProfile,
    isRequest: getIsRequest(friendId),
    sendRequest: !getIsRequest(friendId)
      ? patchFriend
      : () => {
          successToast("You already sent the request!");
        },
  };
};
