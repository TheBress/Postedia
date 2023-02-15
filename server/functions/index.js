export const sanitizeFriends = (userFriends) => {
  const friends = userFriends.map(
    ({ _id, firstName, lastName, occupation, location, picturePath }) => {
      return { _id, firstName, lastName, occupation, location, picturePath };
    }
  );

  return friends;
};

export const randomImage = () => {
  const images = [
    "https://images.daznservices.com/di/library/DAZN_News/b4/f1/erling-haaland-manchester-city-premier-league_kfb9ryd3se7t18lahfw3o4zbb.jpg?t=-535409166",
    "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const random = Math.round(Math.random() * images.length);

  return images[random];
};

export const sanitizeUser = (user) => {
  return {
    _id: user._id,
    email: user.email,
    firstName: user.firstName,
    impressions: user.impressions,
    lastName: user.lastName,
    linkedinUrl: user.linkedinUrl,
    location: user.location,
    occupation: user.occupation,
    picturePath: user.picturePath,
    twitterUrl: user.twitterUrl,
    viewedProfile: user.viewedProfile,
  };
};
