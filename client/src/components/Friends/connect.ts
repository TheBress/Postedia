import { useDispatch, useSelector } from "react-redux";
import { Friend as FriendType, InitialState } from "../../types";
import { setFriends } from "../../redux";

export const useConnect = (friendId?: string, userId?: string) => {
  const friends: FriendType[] = useSelector(
    (state: InitialState) => state.user.friends
  );
  const { _id } = useSelector((state: InitialState) => state.user);
  const dispatch = useDispatch();

  const isUser = friendId === _id;

  const isFriend = Boolean(friends.find((friendM) => friendM._id === friendId));

  const patchFriend = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  const getFriends = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/friends/${userId}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  return { isFriend, patchFriend, friends, getFriends, isUser };
};
