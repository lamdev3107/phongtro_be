import * as wishlistService from "../services/wishlist.service";

const createWishlist = async (req, res, next) => {
  try {
    const { postId } = req.body;
    const userId = req.user.id;
    const wishlist = await wishlistService.createWishlist(postId, userId);
    res.status(201).json({
      message: "Wishlist created successfully",
      data: wishlist,
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

const deleteWishlist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    await wishlistService.deleteWishlist(id, userId);
    res.status(200).json({
      message: "Wishlist deleted successfully",
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

const getWishlistOfUser = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const wishlist = await wishlistService.getWishlist(userId);
    res.status(200).json({
      message: "Wishlist fetched successfully",
      data: wishlist,
      success: true,
    });
  } catch (err) {
    next(err);
  }
};
const checkInWishlist = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const userId = req.user.id;
    const res = await wishlistService.checkInWishlist(postId, userId);
    return res.status(200).json({
      message: "Wishlist checked successfully",
      data: !!res,
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

export { createWishlist, deleteWishlist, getWishlistOfUser, checkInWishlist };
