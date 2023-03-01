import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { successToast } from "../../functions";
import {
  setFriends,
  setUserNotifications,
  setUserRequestsReceived,
} from "../../redux";
import { Notification, Request } from "../../types";

export const useConnect = (request?: Request, notification?: Notification) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEnter, setisEnter] = useState<boolean>(false);

  const goProfile = () => {
    navigate(`/profile/${request?.userSendId}`);
  };

  const deleteRequest = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/requests/${request?._id}/${request?.userReceivedId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    dispatch(setUserRequestsReceived({ requests: data }));
    successToast("Request deleted successfully");
  };

  const acceptRequest = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/requests/${request?._id}`,
      {
        method: "PATCH",
      }
    );
    const data = await response.json();

    dispatch(setUserRequestsReceived({ requests: data.requests }));
    dispatch(setFriends({ friends: data.friends }));
  };

  const deleteNotification = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/notifications/${notification?._id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    dispatch(setUserNotifications({ notifications: data }));
    successToast("Notification deleted successfully");
  };

  return {
    deleteRequest,
    goProfile,
    acceptRequest,
    isEnter,
    setisEnter,
    deleteNotification,
  };
};
