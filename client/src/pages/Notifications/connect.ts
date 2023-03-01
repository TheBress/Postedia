import { GetStates } from "../../functions";

export const useConnect = () => {
  const { notifications, requestsReceived, user } = GetStates();

  return { notifications, requestsReceived, id: user._id };
};
