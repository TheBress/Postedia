import {
  addRemoveFriendRequest,
  createAcceptNotification,
  sanitizeFriends,
} from "../functions/index.js";
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
    const chosenUser = friendId === profileId ? friend : profileUser;

    const action = await addRemoveFriendRequest(friend, user, friendId, id);

    await user.save();
    await friend.save();

    const friendsUser = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const friendsFriend = await Promise.all(
      chosenUser.friends.map((id) => User.findById(id))
    );

    const formattedUserFriends = sanitizeFriends(friendsUser);
    const formattedFriendFriends = sanitizeFriends(friendsFriend);

    const sentRequests = await Request.find({ userSendId: user._id });
    const receivedRequests = await Request.find({ userReceivedId: user._id });

    res.status(200).json({
      user: formattedUserFriends,
      friend: formattedFriendFriends,
      action,
      sentRequests,
      receivedRequests,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { location, occupation, twitterUrl, linkedinUrl, _id, isPublic } =
      req.body;

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

    let requests = await Request.find({
      userReceivedId: updatedUser.id,
    });

    if (updatedUser.isPublic && requests.length) {
      await Promise.all(
        requests.map(async (request) => {
          const requestUser = await User.findById(request.userSendId);

          requestUser.friends.push(updatedUser.id);
          updatedUser.friends.push(requestUser.id);

          const notification = createAcceptNotification(
            requestUser.id,
            updatedUser.id,
            `${updatedUser.firstName} ${updatedUser.lastName}`
          );

          await notification.save();

          await requestUser.save();

          await Request.findByIdAndDelete(request.id);
        })
      );
    }

    await updatedUser.save();

    requests = await Request.find({
      userReceivedId: updatedUser.id,
    });

    const friends = await Promise.all(
      updatedUser.friends.map((id) => User.findById(id))
    );

    const formattedFriends = await sanitizeFriends(friends);

    res
      .status(200)
      .json({ user: updatedUser, friends: formattedFriends, requests });
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
