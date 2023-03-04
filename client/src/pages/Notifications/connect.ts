import { getNotReadNotifications, GetStates } from "../../functions";

export const useConnect = () => {
  const { notifications, requestsReceived, user } = GetStates();

  return {
    notifications,
    notReadNotifications: getNotReadNotifications(),
    requestsReceived,
    id: user._id,
  };
};
