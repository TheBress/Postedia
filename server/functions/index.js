import Request from "../models/Request.js";
import Notification from "../models/Notification.js";

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
    historial: user.historial,
  };
};

export const addRemoveFriendRequest = async (friend, user, friendId, id) => {
  let action = "";
  if (friend.isPublic || user.friends.includes(friendId)) {
    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((userId) => userId !== id);
      action = "REMOVE";
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
      action = "ADD";
    }
    const request = await Request.findOneAndDelete({
      userSendId: friend._id,
      userReceivedId: user._id,
    });

    if (request) {
      const notification = new Notification({
        userId: friend._id,
        message: `${user.firstName} ${user.lastName} has accepted your request.`,
      });
      notification.save();
    }
  } else {
    const request = new Request({
      userSendId: user._id,
      userReceivedId: friend._id,
      message: `${user.firstName} ${user.lastName} wants to be your friend`,
      userImage: user.picturePath,
    });

    request.save();

    action = "REQUEST";
  }

  return action;
};

export const createAcceptNotification = (userSendId, userReceived) => {
  return new Notification({
    userReceivedId: userSendId,
    userSendId: userReceived.id,
    message: `${userReceived.firstName} ${userReceived.lastName} has accepted your friend request.`,
  });
};
