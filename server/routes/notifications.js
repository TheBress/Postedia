import express from "express";
import {
  createNotification,
  deleteNotification,
  getUserNotifications,
  markAsRead,
} from "../controllers/notifications.js";

const router = express.Router();

router.get("/:userId", getUserNotifications);
router.post("/", createNotification);
router.patch("/:id/:userId", markAsRead);
router.delete("/:id/:userId", deleteNotification);

export default router;
