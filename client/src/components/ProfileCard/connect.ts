import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { sanitizeUser } from "../../functions";
import { setIsEdited, setUser, setUserFriends } from "../../redux";
import { InitialState, UpdatedUser } from "../../types";

export const useConnect = (userId?: string) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const isEdited = useSelector((state: InitialState) => state.isEdited);
  const user = useSelector((state: InitialState) => state.user);
  const userFriends = useSelector((state: InitialState) => state.userFriends);
  const friends = useSelector((state: InitialState) => state.user.friends);
  const posts = useSelector((state: InitialState) => state.posts);
  const sanitizedUser: UpdatedUser = sanitizeUser(user);
  const isProfile = window.location.pathname.includes("profile");

  const userPosts = posts.filter((post) => post.userId === user._id);

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
    dispatch,
    isEdited,
    isUser: userId === user._id,
    sanitizedUser,
    friendsNumber: !isProfile ? friends.length : userFriends.length,
    postNumber: !isProfile ? userPosts.length : posts.length,
    loading,
  };
};
