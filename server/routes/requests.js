import express from "express";
import {
  acceptRejectRequest,
  getUserReceivedRequest,
  getUserSendRequest,
} from "../controllers/requests";

const router = express.Router();

router.get("/:userId", getUserReceivedRequest);
router.get("/:userId", getUserSendRequest);
router.patch("/:id", acceptRejectRequest);

export default router;
