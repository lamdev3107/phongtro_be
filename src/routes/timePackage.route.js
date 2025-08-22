import express from "express";
import * as timePackageController from "../controllers/timePackage.controller";
import { verifyAdmin } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/", verifyAdmin, timePackageController.createNewTimePackage);
router.get("/", timePackageController.getTimePackages);

export default router;
