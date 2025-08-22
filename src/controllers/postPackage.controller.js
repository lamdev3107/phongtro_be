import { StatusCodes } from "http-status-codes";
import { convertFormData } from "../utils/common";
import {
  createNewPostPackageService,
  deletePostPackageService,
  getPostPackageGroupService,
  getPostPackagesService,
  updatePostPackageService,
} from "../services/postPackage.service";
import { updatePostTypeService } from "../services/postType.service";

const createNewPostPackage = async (req, res, next) => {
  try {
    const payload = req.body;
    const response = await createNewPostPackageService(payload);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (err) {
    next(err);
  }
};

const getPostPackages = async (req, res, next) => {
  try {
    const timePackageId = req.query?.timepackageid;
    const response = await getPostPackagesService(timePackageId);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    next(err);
  }
};
const getPostPackageGroup = async (req, res, next) => {
  try {
    const response = await getPostPackageGroupService();

    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    next(err);
  }
};
const updatePostPackage = async (req, res, next) => {
  try {
    let id = req.params.id;
    let payload = req.body;

    // payload = convertFormData(payload);
    const response = await updatePostPackageService(id, payload);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    next(err);
  }
};
const deletePostPackage = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await deletePostPackageService(id);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    next(err);
  }
};
export {
  createNewPostPackage,
  getPostPackages,
  updatePostPackage,
  deletePostPackage,
  getPostPackageGroup,
};
