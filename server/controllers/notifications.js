import Notification from "../models/Notification.js";

export const getUserNotifications = async (req, res) => {
  try {
    const { userId } = req.params;

    const userNotifications = await Notification.find({ userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(userNotifications);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
export const createNotification = async (req, res) => {
  try {
    const { userId, message } = req.body;

    new Notification({
      userId,
      message,
    });

    const userNotifications = await Notification.find({ userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(userNotifications);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
export const markAsRead = async (req, res) => {
  try {
    const { id, userId } = req.params;

    await Notification.findByIdAndUpdate(id, { isRead: true });

    const userNotifications = await Notification.find({ userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(userNotifications);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
export const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;

    const notification = await Notification.findByIdAndDelete(id);

    const userNotifications = await Notification.find({
      userId: notification.userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(userNotifications);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
