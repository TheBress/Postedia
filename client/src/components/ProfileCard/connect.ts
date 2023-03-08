import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {
  getIsFriend,
  getIsProfile,
  getIsRequest,
  GetStates,
  getTotalLikes,
  sanitizeText,
  sanitizeUser,
  successToast,
} from "../../functions";
import {
  setFriends,
  setIsEdited,
  setUser,
  setUserFriends,
  setUserRequestsReceived,
} from "../../redux";
import { UpdatedUser, User, UserInfo } from "../../types";
import { useConnect as useFriendsConnect } from "../Friends/connect";

export const useConnect = (profileUser?: User) => {
  const dispatch = useDispatch();
  const { user, userFriends, posts, friends, isEdited } = GetStates();
  const { patchFriend } = useFriendsConnect(profileUser?._id, profileUser?._id);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `${process.env.REACT_APP_URL}/profile/${profileUser?._id}`
    );

    successToast("Link copied to clipboard");
  };

  const sanitizedUser: UpdatedUser = sanitizeUser(user);
  const isProfile = getIsProfile();

  const isFriend: boolean = getIsFriend(profileUser);

  const userPosts = posts.filter((post) => post.userId === user._id);

  const userInfo: UserInfo = {
    isFriend,
    friendsNumber: sanitizeText(
      !isProfile ? friends.length : userFriends.length,
      "friend"
    ),
    postNumber: sanitizeText(
      !isProfile ? userPosts.length : posts.length,
      "post"
    ),
    isUser: isProfile ? profileUser?._id === user._id : true,
    isRequest: isProfile ? getIsRequest(profileUser?._id) : false,
    totalLikes: getTotalLikes(!isProfile ? userPosts : posts),
    text: user.isPublic ? "Public" : "Private",
    fullName: `${user.firstName} ${user.lastName}`,
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
    dispatch(setUserRequestsReceived({ requests: response.requests }));
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
  }, [dispatch, profileUser?._id]);

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
    copyToClipboard,
  };
};
