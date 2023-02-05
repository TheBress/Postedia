import express from "express";
import {
  addRemoveFriend,
  getUserById,
  getUserFriends,
  updateProfile,
} from "../controllers/users.js";

const router = express.Router();

router.get("/:id", getUserById);
router.get("/friends/:id", getUserFriends);
router.patch("/:id/:friendId/:profile", addRemoveFriend);
router.patch("/update", updateProfile);

export default router;
