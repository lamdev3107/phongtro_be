import express from "express";
import * as postPackageController from "../controllers/postPackage.controller";
import { verifyAdmin } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/", verifyAdmin, postPackageController.createNewPostPackage);
router.get("/", postPackageController.getPostPackages);
router.get("/group", postPackageController.getPostPackageGroup);
router.put("/:id", verifyAdmin, postPackageController.updatePostPackage);
router.delete("/:id", verifyAdmin, postPackageController.deletePostPackage);

export default router;
