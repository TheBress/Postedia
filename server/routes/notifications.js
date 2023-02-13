import express from "express";
import {
  createNotification,
  getUserNotifications,
  updateNotification,
} from "../controllers/notifications.js";

const router = express.Router();

router.get("/:userId", getUserNotifications);
router.post("/", createNotification);
router.post("/:notificationId/:userId", updateNotification);

export default router;
