import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchHeight, GetStates } from "../../functions";
import { setHistorial } from "../../redux";
import { User } from "../../types";

export const useConnect = () => {
  const { user } = GetStates();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>();
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const usersFound = useMemo(() => {
    if (value)
      return users?.filter(
        (user) =>
          user.firstName.toLocaleLowerCase().includes(value) ||
          user.lastName.toLocaleLowerCase().includes(value)
      );

    return [];
  }, [value, users]);

  const height = getSearchHeight(
    user.historial.length,
    value,
    usersFound?.length
  );

  const addToHistorial = async (searchedUser: User) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/${user._id}/${searchedUser._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const historial = await response.json();

    dispatch(setHistorial({ historial }));

    user._id !== searchedUser._id
      ? navigate(`/profile/${searchedUser._id}`)
      : navigate("/");
  };

  const removeFromHistorial = async (searchedUser: User) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/${user._id}/${searchedUser._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const historial = await response.json();

    dispatch(setHistorial({ historial }));
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return {
    users,
    value,
    setValue,
    usersFound,
    user,
    handleChange,
    addToHistorial,
    removeFromHistorial,
    height,
  };
};
