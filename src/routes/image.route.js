import express from "express";
import * as imageController from "../controllers/image.controller";

const router = express.Router();

router.post("/upload", postController.uploadImages);

export default router;
