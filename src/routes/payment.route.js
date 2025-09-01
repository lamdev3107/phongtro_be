import express from "express";
import * as paymentController from "../controllers/payment.controller";
import { verifyAccessToken } from "../middlewares/auth.middleware";

const router = express.Router();

// router.post("/:postpaymentid", paymentController.momoPayment);
// router.post("/create-payment-link", paymentController.createPaymentLink);
router.post("/check-payment", paymentController.checkPayment);
export default router;
