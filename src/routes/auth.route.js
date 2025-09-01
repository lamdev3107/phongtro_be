import express from "express";
const router = express.Router();
import {
  forgotPassword,
  login,
  register,
  resetPassword,
  requestRefreshToken,
  sendOTP,
  verifyEmail,
  logout,
  changePassword,
} from "../controllers/auth.controller.js";
import { verifyAccessToken } from "../middlewares/auth.middleware.js";

router.post("/login", login);
router.post("/logout", verifyAccessToken, logout);
router.post("/register", register, sendOTP);
router.post("/send-otp", sendOTP);
router.post("/verify", verifyEmail);
// //REFRESH TOKEN
router.post("/refresh-token", requestRefreshToken);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.put("/password", verifyAccessToken, changePassword);

export default router;
