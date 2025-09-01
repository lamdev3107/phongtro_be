import * as wishlistService from "../services/wishlist.service";

const toggleWishlistItem = async (req, res, next) => {
  try {
    const { postId } = req.body;
    const userId = req.user.id;
    const wishlistStatus = await wishlistService.checkInWishlist(
      postId,
      userId
    );
    if (!!wishlistStatus) {
      await wishlistService.deleteWishlist(postId, userId);
    } else {
      await wishlistService.createWishlist(postId, userId);
    }
    res.status(201).json({
      message: "Wishlist toggled successfully",
      data: wishlistStatus,
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
    const wishlistStatus = await wishlistService.checkInWishlist(
      postId,
      userId
    );
    res.status(200).json({
      message: "Wishlist checked successfully",
      data: !!wishlistStatus,
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

export { toggleWishlistItem, getWishlistOfUser, checkInWishlist };
