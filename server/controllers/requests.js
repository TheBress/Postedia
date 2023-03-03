import Request from "../models/Request.js";
import User from "../models/User.js";
import Notification from "../models/Notification.js";
import {
  createAcceptNotification,
  sanitizeFriends,
} from "../functions/index.js";

export const getUserReceivedRequest = async (req, res) => {
  try {
    const { userId } = req.params;

    const userRequests = await Request.find({ userReceivedId: userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(userRequests);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getUserSendRequest = async (req, res) => {
  try {
    const { userId } = req.params;

    const userRequests = await Request.find({ userSendId: userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(userRequests);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const acceptRejectRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await Request.findById(id);
    const userSend = await User.findById(request.userSendId);
    const userReceived = await User.findById(request.userReceivedId);

    userSend.friends.push(userReceived.id);
    userReceived.friends.push(userSend.id);

    await userSend.save();
    await userReceived.save();

    const notification = await createAcceptNotification(
      userSend.id,
      userReceived
    );

    await notification.save();

    await request.delete();

    const userRequests = await Request.find({
      userReceivedId: userReceived._id,
    }).sort({
      createdAt: -1,
    });

    const friends = await Promise.all(
      userReceived.friends.map((id) => User.findById(id))
    );

    const formattedUserFriends = sanitizeFriends(friends);

    res
      .status(200)
      .json({ requests: userRequests, friends: formattedUserFriends });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const deleteRequest = async (req, res) => {
  try {
    const { id, userId } = req.params;

    await Request.findByIdAndDelete(id);

    const userRequests = await Request.find({ userSendId: userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(userRequests);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
