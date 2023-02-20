import Request from "../models/Request";
import User from "../models/User";

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
    const { action } = req.body;

    const request = await Request.findById(id);
    const userSend = await User.findById(request.userSendId);
    const userReceived = await User.findById(request.userReceivedId);

    if (action) {
      userSend.friends = userSend.friends.push(userReceived._id);
      userReceived.friends = userReceived.friends.push(userSend._id);

      await userSend.save();
      await userReceived.save();
    }

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