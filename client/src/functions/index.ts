import { UpdatedUser, User } from "../types";

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
