import { GetStates } from "../../functions";

export const useConnect = () => {
  const { notifications, requestsReceived, user } = GetStates();

  return {
    notifications,
    notReadNotifications: notifications.filter(
      (notification) => !notification.isRead
    ),
    requestsReceived,
    id: user._id,
  };
};
