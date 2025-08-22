import * as postService from "../services/post.service";
import { convertFormData } from "../utils/common";

const createNewPost = async (req, res, next) => {
  try {
    const payload = req.body;
    let images = req.files;

    let addressObj = {
      province: payload.province,
      district: payload.district,
      ward: payload.ward,
      address: payload.address,
      addressString: payload.addressString,
    };
    let attributes = payload.attributes;
    let post = {
      categoryId: payload.category,
      userId: req.user.id,
      title: payload.title,
      description: payload.description,
      price: payload.price,
      priceUnit: payload.priceUnit,
      acreage: payload.acreage,
    };
    const data = {
      ...post,
      address: addressObj,
      attributes: attributes,
      images: images,
    };
    const response = await postService.createNewPostService(data);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { addressString, ...needConvertData } = req.body;

    const payload = convertFormData(needConvertData);

    const { id } = req.params;
    let images = req.files;
    let addressObj = {
      province: payload.province,
      district: payload.district,
      ward: payload.ward,
      address: payload.address,
      addressString: addressString,
    };
    let attributes = payload.attributes;
    let post = {
      categoryId: payload.category,
      userId: req.user.id,
      title: payload.title,
      description: payload.description,
      price: payload.price,
      priceUnit: payload.priceUnit,
      acreage: payload.acreage,
    };
    const data = {
      ...post,
      address: addressObj,
      attributes: attributes,
      images: images,
    };
    const response = await postService.updatePostService(id, data);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
export const getPostsLimit = async (req, res) => {
  const { page, priceNumber, areaNumber, ...query } = req.query;
  try {
    const response = await postService.getPostsLimitService(page, query, {
      priceNumber,
      areaNumber,
    });
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
const getPost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await postService.getPostService(id);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const getPosts = async (req, res, next) => {
  try {
    const {
      orderby = "createdAt", // Giá trị mặc định là sắp xếp theo thời gian
      order = "desc", // Giá trị mặc định là giảm dần (mới nhất trước)
      page = 1,
      limit = 10,
    } = req.query;

    const data = await postService.getPostsService(orderby, order, page, limit);
    return res.status(200).json({
      success: true,
      message: "Get posts successfully",
      ...data,
    });
  } catch (err) {
    next(err);
  }
};

export const getNewPosts = async (req, res) => {
  try {
    const response = await postService.getNewPostService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

export { createNewPost, getPost, updatePost, getPosts };
