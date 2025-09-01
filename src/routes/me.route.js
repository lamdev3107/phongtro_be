import express from "express";
import * as meController from "../controllers/me.controller";
import { verifyAccessToken } from "../middlewares/auth.middleware";
import upload from "../middlewares/uploader";

const router = express.Router();

router.get("/posts", verifyAccessToken, meController.getMyPosts);
router.get("/post-payments", verifyAccessToken, meController.getMyPostPayments);
router.put(
  "/account",
  verifyAccessToken,
  upload.single("avatar"),
  meController.updateMyAccount
);
export default router;
