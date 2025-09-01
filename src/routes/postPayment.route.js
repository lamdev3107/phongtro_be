import express from "express";
import * as postPaymentController from "../controllers/postPayment.controller";
import { verifyAccessToken } from "../middlewares/auth.middleware";

const router = express.Router();
router.post("/", verifyAccessToken, postPaymentController.createNewPostPayment);
router.get(
  "/payment-link-info",
  verifyAccessToken,
  postPaymentController.getPaymentLinkInfo
);
router.delete(
  "/:id",
  verifyAccessToken,
  postPaymentController.deletePostPayment
);
router.post("/complete-payment", postPaymentController.completePostPayment);
export default router;
