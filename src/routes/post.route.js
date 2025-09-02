import express from "express";
import * as postController from "../controllers/post.controller";
import upload from "../middlewares/uploader";
import { verifyAccessToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/:id", postController.getPost);
router.post(
  "/",
  verifyAccessToken,
  upload.array("images", 20),
  postController.createNewPost
);
router.put(
  "/:id",
  verifyAccessToken,
  upload.array("images", 20),
  postController.updatePost
);
router.put("/:id/status", verifyAccessToken, postController.updatePostStatus);
router.get("/", postController.getPosts);

export default router;
