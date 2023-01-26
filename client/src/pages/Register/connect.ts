import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../types";

export const useConnect = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [registerUser, setRegisterUser] = useState<RegisterUser>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setRegisterUser({
      ...registerUser,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loggedInUser = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerUser),
      }
    ).then((res) => {
      return res.json();
    });

    if (!loggedInUser.msg) {
      await localStorage.setItem("MERN_SOCIAL_TOKEN", loggedInUser.token);
      navigate("/login");
    } else {
      setError(loggedInUser.msg);
    }
  };

  return { registerUser, handleChange, error, handleSubmit };
};
