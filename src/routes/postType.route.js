import express from "express";
import * as postTypeController from "../controllers/postType.controller";
import upload from "../middlewares/uploader";
import { verifyAdmin } from "../middlewares/auth.middleware";

const router = express.Router();

router.post(
  "/",
  verifyAdmin,
  upload.single("imageDemo"),
  postTypeController.createNewPosttype
);
router.put(
  "/:id",
  verifyAdmin,
  upload.single("imageDemo"),
  postTypeController.updatePostType
);
router.delete("/:id", verifyAdmin, postTypeController.deletePostType);
router.get("/", verifyAdmin, postTypeController.getPostTypeList);

export default router;
