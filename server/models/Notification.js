import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
  {
    description: String,
    userId: String,
    link: String,
    isSeen: { Boolean, default: false },
  },
  { timestamps: true }
);

const Notification = mongoose.model("Notification", NotificationSchema);

export default Notification;
