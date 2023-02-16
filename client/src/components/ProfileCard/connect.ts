import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { GetStates, sanitizeUser, successToast } from "../../functions";
import { setFriends, setIsEdited, setUser, setUserFriends } from "../../redux";
import { UpdatedUser, User } from "../../types";

export const useConnect = (profileUser?: User) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { user, userFriends, posts, friends, isEdited } = GetStates();

  const sanitizedUser: UpdatedUser = sanitizeUser(user);
  const isProfile = window.location.pathname.includes("profile");

  const isFriendOrPublic: boolean | undefined =
    friends.some((friend) => friend._id === profileUser?._id) ||
    profileUser?.isPublic;

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
        `${process.env.REACT_APP_API_URL}/users/friends/${profileUser?._id}`,
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
      await fetch(
        `${process.env.REACT_APP_API_URL}/posts/${profileUser?._id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => {
          return res.json();
        })
        .finally(() => {
          setLoading(true);
        });
    };

    if (profileUser?._id) getFriends();
    if (!isProfile) getUserPosts();
  }, [profileUser?._id, isProfile, dispatch]);

  return {
    updatedUser,
    handleChange,
    handleSubmit,
    isEdited,
    isUser: profileUser?._id === user._id,
    sanitizedUser,
    friendsNumber: !isProfile ? friends.length : userFriends.length,
    postNumber: !isProfile ? userPosts.length : posts.length,
    loading,
    changeIsEdited,
    isFriendOrPublic,
  };
};
