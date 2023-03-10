import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNotReadNotifications, GetStates } from "../../../functions";
import {
  setLogout,
  setUserNotifications,
  setUserRequestsReceived,
  setUserRequestsSent,
} from "../../../redux";

export const useConnect = () => {
  const navigate = useNavigate();
  const { user, requestsReceived, notifications } = GetStates();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setLogout());
  };

  const goTo = (url: string) => {
    navigate(`../${url}`, { replace: true });
  };

  useEffect(() => {
    const getUserRequestsReceived = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/requests/received/${user?._id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      dispatch(setUserRequestsReceived({ requests: data }));
    };

    const getUserRequestsSent = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/requests/send/${user?._id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      dispatch(setUserRequestsSent({ requests: data }));
    };

    const getUserNotifications = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/notifications/${user?._id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      dispatch(setUserNotifications({ notifications: data }));
    };

    getUserNotifications();
    getUserRequestsReceived();
    getUserRequestsSent();
  }, [dispatch, user._id]);

  return {
    requestsReceived,
    notifications,
    totalNotifications:
      requestsReceived.length + getNotReadNotifications().length,
    logout,
    goTo,
  };
};
