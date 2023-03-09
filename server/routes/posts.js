import express from "express";
import {
  addComment,
  createPost,
  deletePost,
  getFeedPosts,
  getPost,
  getUserPosts,
  likePost,
  updatePost,
  updateTimesShared,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getFeedPosts);
router.get("/:userId", getUserPosts);
router.get("/post/:postId", getPost);
router.post("/", createPost);
router.patch("/:id/like", likePost);
router.patch("/:id/comment", addComment);
router.patch("/:id/timesShared", updateTimesShared);
router.patch("/:id/update/:isPost", updatePost);
router.delete("/:id", deletePost);

export default router;
