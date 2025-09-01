const db = require("../models");

const createWishlist = async (postId, userId) => {
  try {
    const wishlist = await db.Wishlist.create({ postId, userId });
    return wishlist;
  } catch (err) {
    throw err;
  }
};

const deleteWishlist = async (id, userId) => {
  try {
    await db.Wishlist.destroy({ where: { id, userId } });
    return true;
  } catch (err) {
    throw err;
  }
};

const getWishlist = async (userId) => {
  try {
    const wishlist = await db.Wishlist.findAll({ where: { userId } });
    return wishlist;
  } catch (err) {
    throw err;
  }
};

const checkInWishlist = async (postId, userId) => {
  try {
    const wishlist = await db.Wishlist.findOne({ where: { postId, userId } });
    return wishlist;
  } catch (err) {
    throw err;
  }
};

export { createWishlist, deleteWishlist, getWishlist, checkInWishlist };
