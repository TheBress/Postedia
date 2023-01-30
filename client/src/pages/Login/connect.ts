import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../types";

export const useConnect = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [loginUser, setLoginUser] = useState<LoginUser>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLoginUser({
      ...loginUser,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loggedInUser = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginUser),
      }
    ).then((res) => {
      return res.json();
    });

    if (!loggedInUser.msg) {
      await localStorage.setItem("POSTEDIA_TOKEN", loggedInUser.token);
      navigate("/");
    } else {
      setError(loggedInUser.msg);
    }
  };

  return {
    handleSubmit,
    loginUser,
    setLoginUser,
    handleChange,
    error,
    setError,
  };
};
