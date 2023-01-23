import express from "express";
import {
  addRemoveFriend,
  getUserById,
  getUserFriends,
} from "../controllers/users.js";

const router = express.Router();

router.get("/:id", getUserById);
router.get("/friends/:id", getUserFriends);
router.patch("/:id/:friendId", addRemoveFriend);

export default router;
