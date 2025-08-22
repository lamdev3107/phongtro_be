import express from "express";
import * as meController from "../controllers/me.controller";
import { verifyAccessToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/posts", verifyAccessToken, meController.getMyPostPayments);

export default router;
