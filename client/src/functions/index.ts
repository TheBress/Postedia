import { useSelector } from "react-redux";
import { InitialState, UpdatedUser, User } from "../types";

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
    viewedProfile: 0,
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
    return value < 9 ? `0${value}` : value;
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
