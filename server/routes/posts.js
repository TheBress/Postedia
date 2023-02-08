import express from "express";
import {
  addComment,
  createPost,
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getFeedPosts);
router.get("/:userId", getUserPosts);
router.patch("/:id/like", likePost);
router.patch("/:id/comment", addComment);
router.post("/", createPost);

export default router;
