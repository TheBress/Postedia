import express from "express";
import {
  addRemoveFriend,
  getUserById,
  getUserFriends,
  updateProfile,
} from "../controllers/users.js";

const router = express.Router();

router.get("/:token", getUserById);
router.get("/friends/:id", getUserFriends);
router.patch("/:id/:friendId", addRemoveFriend);
router.post("/update/:id", updateProfile);

export default router;
