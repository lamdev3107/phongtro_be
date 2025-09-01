import { StatusCodes } from "http-status-codes";
import {
  createNewPostPackageService,
  deletePostPackageService,
  getPostPackageGroupService,
  getPostPackageByTimePackageId,
  updatePostPackageService,
} from "../services/postPackage.service";

const createNewPostPackage = async (req, res, next) => {
  try {
    const payload = req.body;
    const newPostPackage = await createNewPostPackageService(payload);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Thêm mới gói tin thành công!",
      data: newPostPackage,
    });
  } catch (err) {
    next(err);
  }
};

const getPostPackages = async (req, res, next) => {
  try {
    const timePackageId = req.query?.timepackageid;
    const postPackages = await getPostPackageByTimePackageId(timePackageId);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Lấy danh sách gói tin thành công!",
      data: postPackages,
    });
  } catch (err) {
    next(err);
  }
};
const getPostPackageGroup = async (req, res, next) => {
  try {
    const postPackageGroup = await getPostPackageGroupService();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Lấy danh sách gói tin thành công!",
      data: postPackageGroup,
    });
  } catch (err) {
    next(err);
  }
};
const updatePostPackage = async (req, res, next) => {
  try {
    let id = req.params.id;
    let payload = req.body;

    // payload = convertFormData(payload);
    const updatedPostPackage = await updatePostPackageService(id, payload);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Cập nhật gói tin thành công!",
      data: updatedPostPackage,
    });
  } catch (err) {
    next(err);
  }
};
const deletePostPackage = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedPostPackage = await deletePostPackageService(id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Xóa gói tin thành công!",
      data: deletedPostPackage,
    });
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
