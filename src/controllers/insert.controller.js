import * as inserService from "../services/insert.service";

export const insert = async (req, res, next) => {
  try {
    const response = await inserService.insertService();
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
