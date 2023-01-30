import { useMemo, useState } from "react";
import { GetUser } from "../../hooks/getUser";
import { UpdatedUser } from "../../types";

export const useConnect = (user: UpdatedUser) => {
  const [updatedUser, setUpdatedUser] = useState<UpdatedUser>({
    occupation: "",
    location: "",
    twitterUrl: "",
    linkedinUrl: "",
    viewedProfile: 0,
    impressions: 0,
    _id: "",
  });
  const { refetch } = GetUser();

  useMemo(() => setUpdatedUser(user), [user]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUpdatedUser({
      ...updatedUser,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(
      `${process.env.REACT_APP_API_URL}/users/update/${updatedUser._id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(updatedUser),
      }
    ).then(() => {
      refetch();
    });
  };

  return { updatedUser, handleChange, handleSubmit };
};
