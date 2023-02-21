import { GetStates } from "../../functions";

export const useConnect = () => {
  const { notifications, requestsReceived } = GetStates();

  return { notifications, requestsReceived };
};
