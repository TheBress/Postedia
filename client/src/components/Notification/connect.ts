import { useDispatch } from "react-redux";
import { successToast } from "../../functions";
import { setUserRequestsReceived } from "../../redux";

export const useConnect = (id: string, userId: string) => {
  const dispatch = useDispatch();
  const deleteNotification = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/requests/${id}/${userId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    dispatch(setUserRequestsReceived({ requests: data }));
    successToast("Request deleted successfully");
  };

  return { deleteNotification };
};
