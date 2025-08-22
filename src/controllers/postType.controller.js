import { StatusCodes } from "http-status-codes";
import { convertFormData } from "../utils/common";
import {
  createNewPosttypeService,
  deletePostTypeService,
  getPostTypeListService,
  updatePostTypeService,
} from "../services/postType.service";

const createNewPosttype = async (req, res, next) => {
  try {
    let { description, ...payload } = req.body;
    payload = convertFormData(payload);
    let data = {
      description,
      ...payload,
    };
    if (req.file) {
      data = {
        ...data,
        imageDemo: req.file.path,
      };
    }

    const response = await createNewPosttypeService(data);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (err) {
    next(err);
  }
};

const updatePostType = async (req, res, next) => {
  try {
    let { description, ...payload } = req.body;
    let id = req.params.id;
    payload = convertFormData(payload);
    let data = null;
    if (req?.file?.path) {
      data = {
        description,
        newImageDemo: req.file.path,
        ...payload,
      };
    } else {
      data = {
        description,
        ...payload,
      };
    }

    const response = await updatePostTypeService(id, data);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (err) {
    next(err);
  }
};

const getPostTypeList = async (req, res, next) => {
  try {
    const response = await getPostTypeListService();
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    next(err);
  }
};

const deletePostType = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await deletePostTypeService(id);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    next(err);
  }
};

export { createNewPosttype, getPostTypeList, updatePostType, deletePostType };
