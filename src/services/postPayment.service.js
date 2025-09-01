import db from "../models";
const PayOS = require("@payos/node");
import dotenv from "dotenv";
import ApiError from "../utils/apiError";
import { StatusCodes } from "http-status-codes";
import { PostPaymentStatus, PostStatus, PostType } from "../utils/constants";
import payos from "../config/payOS.config";
dotenv.config();

const createNewPostPayment = async (data, status) => {
  try {
    // Tạo mới giao dịch
    let newPostPayment = null;
    const postPackage = await db.PostPackage.findByPk(data.postPackageId, {
      include: [
        {
          model: db.PostType,
          as: "postType",
          attributes: ["id", "name"],
        },
      ],
    });
    if (!postPackage) {
      throw new ApiError("Gói tin đăng không tồn tại", StatusCodes.NOT_FOUND);
    }
    // if (postPackage.postType.name !== PostType.TIN_MIEN_PHI) {
    //   newPostPayment = await db.PostPayment.create({
    //     ...data,
    //     status: PostPaymentStatus.PAID,
    //   });

    //   await db.Post.update(
    //     {
    //       status: PostStatus.ACTIVE,
    //     },
    //     {
    //       where: {
    //         id: data.postId,
    //       },
    //     }
    //   );
    //   return newPostPayment;
    // }
    newPostPayment = await db.PostPayment.create({
      ...data,
      status: PostPaymentStatus.PAID,
    });
    await db.Post.update(
      {
        status: PostStatus.ACTIVE,
      },
      {
        where: {
          id: data.postId,
        },
      }
    );
    return newPostPayment;
  } catch (err) {
    throw err;
  }
};

const getPostPaymentOfPost = async (postId) => {
  try {
    const postPayment = await db.PostPayment.findOne({
      where: { postId },
      include: [
        {
          model: db.PostPackage,
          as: "postPackage",
        },
        {
          model: db.TimePackage,
          as: "timePackage",
        },
      ],
    });
    return postPayment;
  } catch (err) {
    throw err;
  }
};

const getPaymentLinkInfo = async (orderCode) => {
  try {
    const paymentLinkInfo = await payos.getPaymentLinkInformation(orderCode);
    return paymentLinkInfo;
  } catch (err) {
    throw err;
  }
};

const deletePostPaymentService = async (postPaymentId) => {
  try {
    const postPayment = await db.PostPayment.findByPk(postPaymentId);
    if (!postPayment) {
      return {
        success: true,
        message: "Khoản thanh toán không tồn tại!",
        data: null,
      };
    }
    await postPayment.destroy();
    return {
      success: true,
      message: "Hủy thanh toán tin đăng thành công!",
      data: null,
    };
  } catch (err) {
    throw err;
  }
};
const completePostPaymentService = async (postPaymentId) => {
  const transaction = await db.sequelize.transaction();

  try {
    const postPayment = await db.PostPayment.findByPk(postPaymentId, {
      raw: true,
    });

    if (!postPayment) {
      throw new Error("khoản thanh toán tin đăng không tồn tại!");
    }
    await db.PostPayment.update(
      { status: PostPaymentStatus.PAID },
      { where: { id: postPaymentId }, transaction }
    );
    await db.Post.update(
      { status: PostStatus.ACTIVE },
      { where: { id: postPayment.postId }, transaction }
    );

    await transaction.commit();
    return {
      success: true,
      message: "Hoàn tất thanh toán thành công!",
      data: null,
    };
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};

const createPaymentLink = async (data) => {
  try {
    const paymentLink = await payos.createPaymentLink(data);
    return paymentLink;
  } catch (err) {
    throw new ApiError(err.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export {
  createNewPostPayment,
  getPaymentLinkInfo,
  deletePostPaymentService,
  completePostPaymentService,
  getPostPaymentOfPost,
  createPaymentLink,
};
