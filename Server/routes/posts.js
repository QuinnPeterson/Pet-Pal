import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  commentPost,
  getComments,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

/* COMMENTS */
router.post("/:postId/comments", verifyToken, commentPost);
router.get("/:postId/comments", verifyToken, getComments);

export default router;
