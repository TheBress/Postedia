import express from "express";
import {
  createNotification,
  deleteNotification,
  getUserNotifications,
  markAsRead,
} from "../controllers/notifications.js";

const router = express.Router();

router.get("/:userReceivedId", getUserNotifications);
router.post("/", createNotification);
router.patch("/:id/:userReceivedId", markAsRead);
router.delete("/:id", deleteNotification);

export default router;
