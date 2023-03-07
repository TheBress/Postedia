import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetStates } from "../../functions";
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

  const goTo = async (searchedUser: User) => {
    await addHistorial(searchedUser._id);

    user._id !== searchedUser._id
      ? navigate(`/profile/${searchedUser._id}`)
      : navigate("/");
  };

  const addHistorial = async (userId: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/${user._id}/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const historial = await response.json();

    dispatch(setHistorial({ historial }));
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
    goTo,
  };
};
