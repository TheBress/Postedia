import express from "express";
import {
  acceptRejectRequest,
  deleteRequest,
  getUserReceivedRequest,
  getUserSendRequest,
} from "../controllers/requests.js";

const router = express.Router();

router.get("/received/:userId", getUserReceivedRequest);
router.get("/send/:userId", getUserSendRequest);
router.patch("/:id", acceptRejectRequest);
router.delete("/:id/:userId", deleteRequest);

export default router;
