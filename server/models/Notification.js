import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
  {
    userReceivedId: String,
    userSendId: String,
    message: String,
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Notification = mongoose.model("Notification", NotificationSchema);

export default Notification;
