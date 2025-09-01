import { StatusCodes } from "http-status-codes";
import { convertFormData } from "../utils/common";
import {
  createNewTimePackageService,
  getTimePackagesService,
} from "../services/timePackage.service";

const createNewTimePackage = async (req, res, next) => {
  try {
    const payload = req.body;
    const newTimePackage = await createNewTimePackageService(payload);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Thêm mới gói thời gian thành công!",
      data: newTimePackage,
    });
  } catch (err) {
    next(err);
  }
};

const getTimePackages = async (req, res, next) => {
  try {
    const response = await getTimePackagesService();
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    next(err);
  }
};

export { createNewTimePackage, getTimePackages };
