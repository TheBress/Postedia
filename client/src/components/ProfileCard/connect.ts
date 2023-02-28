import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {
  getIsFriendOrPublic,
  getIsProfile,
  getIsRequest,
  GetStates,
  sanitizeText,
  sanitizeUser,
  successToast,
} from "../../functions";
import { setFriends, setIsEdited, setUser, setUserFriends } from "../../redux";
import { UpdatedUser, UserInfo } from "../../types";
import { useConnect as useFriendsConnect } from "../Friends/connect";

export const useConnect = () => {
  const dispatch = useDispatch();
  const { user, userFriends, posts, friends, isEdited, profileUser } =
    GetStates();
  const { patchFriend } = useFriendsConnect(profileUser._id, user._id);

  const sanitizedUser: UpdatedUser = sanitizeUser(user);
  const isProfile = getIsProfile();

  const isFriendOrPublic: boolean | undefined =
    getIsFriendOrPublic(profileUser);

  const userPosts = posts.filter((post) => post.userId === user._id);

  const userInfo: UserInfo = {
    isFriendOrPublic,
    friendsNumber: sanitizeText(
      !isProfile ? friends.length : userFriends.length,
      "friend"
    ),
    postNumber: sanitizeText(
      !isProfile ? userPosts.length : userFriends.length,
      "post"
    ),
    isUser: isProfile ? profileUser._id === user._id : true,
    isRequest: isProfile ? getIsRequest(profileUser._id) : false,
  };

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
    successToast("Data updated succesfully");
  };

  useEffect(() => {
    const getFriends = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/friends/${profileUser?._id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      dispatch(setUserFriends({ friends: data }));
    };

    getFriends();
  }, [profileUser?._id, isProfile, dispatch]);

  return {
    updatedUser,
    handleChange,
    handleSubmit,
    isEdited,
    changeIsEdited,
    userInfo,
    user: !isProfile ? user : profileUser,
    addFriend: !getIsRequest(profileUser?._id)
      ? patchFriend
      : () => {
          successToast("You already sent the request!");
        },
  };
};
