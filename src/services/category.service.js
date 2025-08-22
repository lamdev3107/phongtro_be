import db from "../models";

// GET ALL CATEGORY
export const getCategoriesSerivce = async () => {
  try {
    const response = await db.Category.findAll({
      raw: true,
      order: [["id", "ASC"]],
    });
    if (response) {
      return {
        success: true,
        message: "Get all categories successfully.",
        data: response,
      };
    } else {
      return {
        success: false,
        message: "Failed to get categories.",
        data: null,
      };
    }
  } catch (error) {
    throw error;
  }
};
