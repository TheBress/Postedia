import { sanitizeFriends } from "../functions/index.js";
import Request from "../models/Request.js";
import User from "../models/User.js";

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = await sanitizeFriends(friends);

    res.status(200).json(formattedFriends);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId, profileId } = req.params;

    const user = await User.findById(id);
    const friend = await User.findById(friendId);
    const profileUser = await User.findById(profileId);

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
      await Request.findOneAndDelete({
        userReceivedId: user._id,
        userSendId: friend._id,
      });
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

    await user.save();
    await friend.save();

    const chosenUser = friendId === profileId ? friend : profileUser;

    const friendsUser = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const request = await Request.findOneAndDelete({
      userSendId: chosenUser._id,
      userReceivedId: user._id,
    });

    if (request) {
      const notification = new Notification({
        userId: chosenUser._id,
        message: `${user.firstName} ${user.lastName} has accepted your request.`,
      });
      notification.save();
    }

    const friendsFriend = await Promise.all(
      chosenUser.friends.map((id) => User.findById(id))
    );

    const formattedUserFriends = sanitizeFriends(friendsUser);
    const formattedFriendFriends = sanitizeFriends(friendsFriend);

    const requests = await Request.find({ userReceivedId: user._id });

    res.status(200).json({
      user: formattedUserFriends,
      friend: formattedFriendFriends,
      action,
      requests,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { location, occupation, twitterUrl, linkedinUrl, _id, isPublic } =
      req.body;

    const user = await User.findById(_id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = await sanitizeFriends(friends);

    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        location,
        occupation,
        twitterUrl,
        linkedinUrl,
        isPublic,
      },
      { new: true }
    );

    res.status(200).json({ user: updatedUser, friends: formattedFriends });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const viewsProfile = async (req, res) => {
  try {
    const { userProfileId, userId } = req.body;

    const userProfile = await User.findById(userProfileId);

    if (userProfileId !== userId) {
      if (userProfile.viewedProfile.length > 1) {
        userProfile.viewedProfile = Array.from(
          new Set(userProfile.viewedProfile)
        );
      }
      await userProfile.save();

      const isExist = userProfile.viewedProfile.some((id) => id === userId);

      if (!isExist) {
        userProfile.viewedProfile.push(userId);

        await userProfile.save();
      }
    }

    res.status(200).json(userProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
