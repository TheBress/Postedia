import express from "express";
import {
  addComment,
  createPost,
  deletePost,
  getFeedPosts,
  getUserPosts,
  likePost,
  updatePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getFeedPosts);
router.get("/:userId", getUserPosts);
router.post("/", createPost);
router.patch("/:id/like", likePost);
router.patch("/:id/comment", addComment);
router.patch("/:id/update", updatePost);
router.delete("/:id", deletePost);

export default router;
