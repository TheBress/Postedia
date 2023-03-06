import express from "express";
import {
  addRemoveFriend,
  getAllUsers,
  getUserById,
  getUserFriends,
  updateProfile,
  viewsProfile,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/friends/:id", getUserFriends);
router.patch("/:id/:friendId/:profileId", addRemoveFriend);
router.patch("/update", updateProfile);
router.patch("/views", viewsProfile);

export default router;
