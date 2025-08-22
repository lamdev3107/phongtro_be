import { StatusCodes } from "http-status-codes";
import * as attributeService from "../services/attribute.service";

const getAttributes = async (req, res, next) => {
  try {
    const response = await attributeService.getAttributes();
    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      message: "Get all attributes successfully!",
    });
  } catch (err) {
    next(err);
  }
};

export { getAttributes };
