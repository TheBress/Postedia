import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { sanitizeUser } from "../../functions";
import { setIsEdited, setUser } from "../../redux";
import { InitialState, UpdatedUser } from "../../types";

export const useConnect = () => {
  const dispatch = useDispatch();
  const isEdited = useSelector((state: InitialState) => state.isEdited);
  const user = useSelector((state: InitialState) => state.user);
  const sanitizedUser: UpdatedUser = sanitizeUser(user);

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

  return {
    updatedUser,
    handleChange,
    handleSubmit,
    dispatch,
    isEdited,
    user,
    sanitizedUser,
  };
};
