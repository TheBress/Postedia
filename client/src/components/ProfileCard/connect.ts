import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { sanitizeUser } from "../../functions";
import { setIsEdited, setUser, setUserFriends } from "../../redux";
import { InitialState, UpdatedUser } from "../../types";

export const useConnect = (userId?: string) => {
  const dispatch = useDispatch();
  const isEdited = useSelector((state: InitialState) => state.isEdited);
  const user = useSelector((state: InitialState) => state.user);
  const userFriends = useSelector((state: InitialState) => state.userFriends);
  const friends = useSelector((state: InitialState) => state.user.friends);
  const sanitizedUser: UpdatedUser = sanitizeUser(user);
  const isProfile = window.location.pathname.includes("profile");

  const getFriends = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/friends/${userId}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    dispatch(setUserFriends({ friends: data }));
  };

  const [updatedUser, setUpdatedUser] = useState<UpdatedUser>(sanitizedUser);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setUpdatedUser({
      ...updatedUser,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/update`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    ).then((res) => {
      return res.json();
    });

    dispatch(setUser({ user: response }));
    dispatch(setIsEdited());
  };

  useEffect(() => {
    getFriends();
  }, []);

  return {
    updatedUser,
    handleChange,
    handleSubmit,
    dispatch,
    isEdited,
    isUser: userId === user._id,
    sanitizedUser,
    friends: !isProfile ? friends : userFriends,
  };
};
