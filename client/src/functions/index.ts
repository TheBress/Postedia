import { useSelector } from "react-redux";
import { Ad, InitialState, UpdatedUser, User } from "../types";

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
    viewedProfile: user.viewedProfile,
    impressions: user.impressions,
    _id: user._id,
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
    impressions: 0,
    twitterUrl: "",
    linkedinUrl: "",
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
  return value && value !== 1 ? `${value} ${name}s` : `${value} ${name}`;
};

export const randomAd = () => {
  const max = ads.length - 1;

  const random = Math.round(Math.random() * max);

  return ads[random];
};
