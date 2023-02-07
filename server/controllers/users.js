import { checkUserFriends, sanitizeFriends } from "../functions/index.js";
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

    checkUserFriends(user, friend, friendId, id);

    const chosenUser = friendId === profileId ? friend : profileUser;

    const friendsUser = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const friendsFriend = await Promise.all(
      chosenUser.friends.map((id) => User.findById(id))
    );

    const formattedUserFriends = sanitizeFriends(friendsUser);
    const formattedFriendFriends = sanitizeFriends(friendsFriend);

    res
      .status(200)
      .json({ user: formattedUserFriends, friend: formattedFriendFriends });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { location, occupation, twitterUrl, linkedinUrl, _id } = req.body;

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
        friends: formattedFriends,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
