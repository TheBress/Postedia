import Notification from "../models/Notification.js";

export const getUserNotifications = async (req, res) => {
  try {
    const { userId } = req.params;

    const userNotifications = await Notification.find({ userId });

    res.status(200).json(userNotifications);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createNotification = async (req, res) => {
  try {
    const { description, userId, link } = req.body;

    const notification = new Notification({
      description,
      userId,
      link,
    });

    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateNotification = async (req, res) => {
  try {
    const { notificationId, userId } = req.params;

    await Notification.findByIdAndUpdate(notificationId, { isSeen: true });

    const userNotifications = await Notification.find({ userId });

    res.status(200).json(userNotifications);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
