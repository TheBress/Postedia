import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { GetStates, sanitizeUser, successToast } from "../../functions";
import { setFriends, setIsEdited, setUser, setUserFriends } from "../../redux";
import { UpdatedUser } from "../../types";

export const useConnect = (userId?: string) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { user, userFriends, posts, friends, isEdited } = GetStates();

  const sanitizedUser: UpdatedUser = sanitizeUser(user);
  const isProfile = window.location.pathname.includes("profile");

  const userPosts = posts.filter((post) => post.userId === user._id);

  const [updatedUser, setUpdatedUser] = useState<UpdatedUser>(sanitizedUser);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.name !== "isPublic")
      setUpdatedUser({
        ...updatedUser,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    else
      setUpdatedUser({
        ...updatedUser,
        [e.currentTarget.name]: !updatedUser.isPublic,
      });
  };

  const changeIsEdited = () => {
    dispatch(setIsEdited());
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

    dispatch(setUser({ user: response.user }));
    dispatch(setFriends({ friends: response.friends }));
    dispatch(setIsEdited());
    successToast();
  };

  useEffect(() => {
    const getFriends = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/friends/${userId}`,
        {
          method: "GET",
        }
      );
      const data = await response.json().finally(() => {
        setLoading(true);
      });
      dispatch(setUserFriends({ friends: data }));
    };

    const getUserPosts = async () => {
      await fetch(`${process.env.REACT_APP_API_URL}/posts/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .finally(() => {
          setLoading(true);
        });
    };

    if (userId) getFriends();
    if (!isProfile) getUserPosts();
  }, [userId, isProfile, dispatch]);

  return {
    updatedUser,
    handleChange,
    handleSubmit,
    isEdited,
    isUser: userId === user._id,
    sanitizedUser,
    friendsNumber: !isProfile ? friends.length : userFriends.length,
    postNumber: !isProfile ? userPosts.length : posts.length,
    loading,
    changeIsEdited,
  };
};
