import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema(
  {
    userSendId: String,
    userReceivedId: String,
    message: String,
    isAccepted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", RequestSchema);

export default Request;
