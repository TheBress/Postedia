import express from "express";
import {
  acceptRejectRequest,
  getUserReceivedRequest,
  getUserSendRequest,
} from "../controllers/requests.js";

const router = express.Router();

router.get("/received/:userId", getUserReceivedRequest);
router.get("/send/:userId", getUserSendRequest);
router.patch("/:id", acceptRejectRequest);

export default router;
