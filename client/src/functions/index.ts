import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  Ad,
  InitialState,
  Notification,
  Post,
  UpdatedUser,
  User,
} from "../types";

const ads: Ad[] = [
  {
    name: "Zalando",
    url: "https://www.zalando.es",
    image: "https://www.velfix.es/wp-content/uploads/2021/10/2a5b.jpg",
    nameUrl: "zalando.es",
  },

  {
    name: "Spotify",
    url: "https://open.spotify.com",
    image:
      "https://phantom-marca-us.unidadeditorial.es/5d2838a0005367f924a96c5bdd2eb48f/resize/1980/f/jpg/assets/multimedia/imagenes/2022/06/07/16545575201224.jpg",
    nameUrl: "open.spotify.com",
  },

  {
    name: "PcComponentes",
    url: "https://www.pccomponentes.com",
    image:
      "https://d500.epimg.net/cincodias/imagenes/2019/03/28/companias/1553781529_598345_1553781702_noticia_normal.jpg",
    nameUrl: "pccomponentes.com",
  },
];

export const capitalizeWord = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const sanitizeUser = (user: User): UpdatedUser => {
  const updatedUser: UpdatedUser = {
    occupation: user.occupation,
    location: user.location,
    twitterUrl: user.twitterUrl,
    linkedinUrl: user.linkedinUrl,
    viewedProfile: user.viewedProfile.length,
    _id: user._id,
    isPublic: user.isPublic,
  };

  return updatedUser;
};

export const emptyUser = (): User => {
  const user: User = {
    _id: "",
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    picturePath: "",
    friends: [],
    location: "",
    occupation: "",
    viewedProfile: [],
    historial: [],
    twitterUrl: "",
    linkedinUrl: "",
    isPublic: true,
  };

  return user;
};

export const IsAuth = (): boolean => {
  return Boolean(useSelector((state: InitialState) => state.token));
};

export const goTo = (url: string) => {
  window.location.href = url;
};

export const formatDate = (date: string) => {
  const newDate = new Date(date);

  const sanitizeDate = (value: number) => {
    return value <= 9 ? `0${value}` : value;
  };

  return `${sanitizeDate(newDate.getDate())}-${sanitizeDate(
    newDate.getMonth() + 1
  )}-${sanitizeDate(newDate.getFullYear())} ${sanitizeDate(
    newDate.getHours()
  )}:${sanitizeDate(newDate.getMinutes())}`;
};

export const sanitizeText = (value: number, name: string) => {
  return value !== 1 ? `${value} ${name}s` : `${value} ${name}`;
};

export const randomAd = () => {
  const max = ads.length - 1;

  const random = Math.round(Math.random() * max);

  return ads[random];
};

export const getMaxHeight = (
  isEdited?: boolean,
  hasTwitter?: boolean,
  hasLinkedin?: boolean
) => {
  if (!isEdited && hasTwitter && hasLinkedin) return "51vh";
  if (!isEdited && (hasTwitter || hasLinkedin)) return "47vh";
  if (!isEdited && !hasTwitter && !hasLinkedin) return "36vh";
  if (isEdited) return "73vh";
};

export const getFriendsListName = (
  friendsNumber: number,
  profileId: string,
  userId: string
) => {
  if (friendsNumber && profileId !== userId) return "Friends list";
  else if (userId === profileId && friendsNumber) return "Your Friends list";
  return "No friends";
};

export const successToast = (text: string) => {
  toast.success(text, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const GetStates = () => {
  const isEdited = useSelector((state: InitialState) => state.isEdited);
  const user = useSelector((state: InitialState) => state.user);
  const userFriends = useSelector((state: InitialState) => state.userFriends);
  const friends = useSelector((state: InitialState) => state.user.friends);
  const posts = useSelector((state: InitialState) => state.posts);
  const post = useSelector((state: InitialState) => state.post);
  const notifications = useSelector(
    (state: InitialState) => state.notifications
  );
  const requestsReceived = useSelector(
    (state: InitialState) => state.requestsReceived
  );
  const requestsSent = useSelector((state: InitialState) => state.requestsSent);

  return {
    isEdited,
    user,
    userFriends,
    friends,
    posts,
    notifications,
    requestsReceived,
    post,
    requestsSent,
  };
};

export const emptyPost = (): Post => {
  return {
    _id: "",
    userId: "",
    firstName: "",
    lastName: "",
    location: "",
    description: "",
    picturePath: "",
    userPicturePath: "",
    likes: [],
    createdAt: "",
    comments: [],
    isEdited: false,
    lastUpdated: "",
  };
};

export const getIsPost = () => Boolean(window.location.href.includes("/post"));

export const getIsRequest = (friendId?: string) => {
  const { requestsSent } = GetStates();
  return requestsSent.some((request) => request.userReceivedId === friendId);
};

export const getToast = (action: string) => {
  if (action === "ADD") successToast("You have a new friend!");
  if (action === "REMOVE") successToast("Friend removed successfully");
  if (action === "REQUEST") successToast("Request sent succesfully");
};

export const getFeedHeight = (
  postsNumber: number | undefined,
  showFeed?: boolean
) => {
  if (postsNumber === 0 && showFeed) return "9vh";
  if (!showFeed) return "12vh";
  if (postsNumber && postsNumber * 32 < 57.7) return `${postsNumber * 36}vh`;
  return "57.5vh";
};

export const getIsFriend = (profileUser?: User) => {
  const { friends } = GetStates();
  return friends.some((friend) => friend._id === profileUser?._id);
};

export const getIsProfile = () => {
  return window.location.pathname.includes("/profile");
};

export const getNotificationsMaxHeight = () => {
  const { notifications, requestsReceived } = GetStates();
  const total: number = notifications.length + requestsReceived.length;

  if (!total) return "22vh";
  if (total === 1) return "32vh";
  else return `${total * 25}vh`;
};

export const getNotReadNotifications = (): Notification[] => {
  const { notifications } = GetStates();

  return notifications.filter((notification) => !notification.isRead);
};

export const getTotalLikes = (posts: Post[]): number => {
  let totalLikes: number = 0;

  posts.forEach((post) => (totalLikes += Object.keys(post.likes).length));

  return totalLikes;
};

export const getSearchHeight = (
  historialLenght: number,
  value: string,
  usersFoundLength?: number
) => {
  if (!value && !historialLenght) return "17vh";
  else if (
    value &&
    usersFoundLength &&
    usersFoundLength !== 1 &&
    usersFoundLength < 7
  )
    return `${usersFoundLength * 18.5}vh`;
  else if (value && usersFoundLength === 1) return "27vh";
  else if (value && !usersFoundLength) return "17vh";
  else if (value && usersFoundLength && usersFoundLength >= 7) return "80vh";
  else if (!value && historialLenght !== 1 && historialLenght < 7)
    return `${historialLenght * 18.5}vh`;
  else if (!value && historialLenght) return "27vh";
  else if (!value && historialLenght >= 7) return "80vh";
};
