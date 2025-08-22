import * as services from "../services/category.service";

export const getCategories = async (req, res) => {
  try {
    const response = await services.getCategoriesSerivce();
    return res.status(200).json(response);
  } catch (error) {
    throw error;
  }
};
