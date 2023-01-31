import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setIsEdited, setUser } from "../../redux";
import { UpdatedUser } from "../../types";

export const useConnect = (user: UpdatedUser) => {
  const dispatch = useDispatch();

  const [updatedUser, setUpdatedUser] = useState<UpdatedUser>(user);

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

  return { updatedUser, handleChange, handleSubmit };
};
