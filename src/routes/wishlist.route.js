import express from "express";
import { verifyAccessToken } from "../middlewares/auth.middleware";
import * as wishlistController from "../controllers/wishlist.controller";
const router = express.Router();

router.post("/", verifyAccessToken, wishlistController.createWishlist);
router.delete("/:id", verifyAccessToken, wishlistController.deleteWishlist);
router.get("/", verifyAccessToken, wishlistController.getWishlistOfUser);
router.get(
  "/posts/:postId",
  verifyAccessToken,
  wishlistController.checkInWishlist
);
export default router;
