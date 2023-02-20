import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetStates } from "../../../functions";
import { setUserNotifications, setUserRequests } from "../../../redux";

export const useConnect = () => {
  const { user, requests, notifications } = GetStates();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserRequests = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/requests/received/${user?._id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      dispatch(setUserRequests({ requests: data }));
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
    getUserRequests();
  }, [dispatch, user._id]);

  return {
    requests,
    notifications,
    totalNotifications: requests.length + notifications.length,
  };
};
