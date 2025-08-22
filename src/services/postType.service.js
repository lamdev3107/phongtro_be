import cloudinary from "../config/cloudinary.config";
import db from "../models";
import { returnImagePublicId } from "../utils/common";

const createNewPosttypeService = async (data) => {
  try {
    const newPosttype = await db.PostType.create(data);
    return {
      success: true,
      message: "Thêm mới loại tin thành công!",
      data: newPosttype,
    };
  } catch (err) {
    throw err;
  }
};

const getPostTypeListService = async () => {
  try {
    const postTypes = await db.PostType.findAll({
      raw: true,
      order: [["createdAt", "ASC"]],
    });
    return {
      success: true,
      message: "Lấy danh sách loại tin thành công!",
      data: postTypes,
    };
  } catch (err) {
    throw err;
  }
};
const getPostTypeService = async (id) => {
  try {
    const postType = await db.PostType.findByPk(id, {
      raw: true,
      order: [["createdAt", "ASC"]],
    });
    return {
      success: true,
      message: "Lấy 1 loại tin thành công!",
      data: postType,
    };
  } catch (err) {
    throw err;
  }
};

const updatePostTypeService = async (id, payload) => {
  try {
    const postType = await db.PostType.findByPk(id, {
      raw: true,
    });
    if (payload.newImageDemo) {
      const oldImageUrl = postType.imageDemo; // URL ảnh cũ từ frontend
      payload.imageDemo = payload.newImageDemo;
      // Xóa ảnh cũ trên Cloudinary
      const publicId = returnImagePublicId(oldImageUrl); // Lấy public_id từ URL
      const result = await cloudinary.uploader.destroy(publicId);
    }

    // Cập nhật URL mới trong database
    const result = await db.PostType.update(payload, {
      where: {
        id: id,
      },
    });
    const updatedPosttype = await db.PostType.findByPk(id, {
      raw: true,
    });
    return {
      success: true,
      message: "Cập nhật gói tin thành công!",
      data: updatedPosttype,
    };
  } catch (err) {
    throw err;
  }
};

const deletePostTypeService = async (id) => {
  try {
    const postType = await db.PostType.findByPk(id);
    if (!postType) {
      throw new Error("Loại tin không tồn tại!");
    }
    const oldImageUrl = postType.imageDemo; // URL ảnh cũ từ frontend
    // Xóa ảnh cũ trên Cloudinary
    const publicId = returnImagePublicId(oldImageUrl);
    await cloudinary.uploader.destroy(publicId);
    await postType.destroy();
    return {
      success: true,
      message: "Xóa loại tin thành công!",
      data: null,
    };
  } catch (err) {
    throw err;
  }
};
export {
  createNewPosttypeService,
  getPostTypeListService,
  getPostTypeService,
  updatePostTypeService,
  deletePostTypeService,
};
