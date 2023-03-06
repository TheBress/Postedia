import { useEffect, useMemo, useState } from "react";
import { GetStates } from "../../functions";
import { User } from "../../types";

export const useConnect = () => {
  const { user } = GetStates();
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

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return { users, value, setValue, usersFound, user, handleChange };
};
