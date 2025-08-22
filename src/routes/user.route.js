import express from "express";
import * as userController from "../controllers/user.controller";
import { verifyAccessToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/get-current", userController.getCurrent);

export default router;
