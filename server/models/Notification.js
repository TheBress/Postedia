import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
  {
    userId: String,
    message: String,
    type: "Notification" | "Request",
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Notification = mongoose.model("Notification", NotificationSchema);

export default Notification;
