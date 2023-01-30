import { checkUserFriends, sanitizeFriends } from "../functions/index.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const getUserById = async (req, res) => {
  try {
    const { token } = req.params;

    const { id } = jwt.decode(token);

    const user = await User.findById(id);

    delete user.password;

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
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    checkUserFriends(user, friend, friendId, id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = await sanitizeFriends(friends);

    res.status(200).json(formattedFriends);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { location, occupation, twitterUrl, linkedinUrl } = req.body;
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(id, {
      location,
      occupation,
      twitterUrl,
      linkedinUrl,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
