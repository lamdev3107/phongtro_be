import * as postPaymentService from "../services/postPayment.service";
import * as paymentService from "../services/payment.service";
import * as postQueue from "../queues/post.queue";
import * as postPackageService from "../services/postPackage.service";
import * as postService from "../services/post.service";
import createNewPostMailTemplate from "../templates/mail/createNewPost";
import sendEmail from "../services/mail.service";
import { PostStatus, PostType } from "../utils/constants";
import { StatusCodes } from "http-status-codes";
const createNewPostPayment = async (req, res, next) => {
  try {
    const user = req.user;
    const { returnUrl, cancelUrl, ...postPayment } = req.body;
    const payload = { ...postPayment, userId: user.id };

    const post = await postService.getPostService(payload.postId, {
      raw: true,
    });

    const postPackage = await postPackageService.getPostPackageByIdService(
      payload.postPackageId
    );

    // if (postPackage.postType.name !== PostType.TIN_MIEN_PHI) {
    //   let paymentPayload = {
    //     amount: payload.totalPrice,
    //     description: `Thanh toán tin đăng ${payload.postId}`,
    //     orderCode: Number(String(new Date().getTime()).slice(-6)),
    //     returnUrl: returnUrl,
    //     cancelUrl: cancelUrl,
    //   };

    //   const paymentLinkRes = await paymentService.createPaymentLink(
    //     paymentPayload
    //   );

    //   if (paymentLinkRes) {
    //     // const newPostPayment = await postPaymentService.createNewPostPayment(
    //     //   payload,
    //     //   PostStatus.ACTIVE
    //     // );

    //     console.log("Chekc paymentLink", paymentLinkRes);
    //     return res.status(200).json({
    //       success: true,
    //       message: "Tạo link thanh toán thành công!",
    //       data: newPostPayment.toJSON(),
    //       checkoutUrl: paymentLinkRes.checkoutUrl,
    //     });
    //   } else {
    //     throw new ApiError(
    //       "Create payment link faiied",
    //       StatusCodes.INTERNAL_SERVER_ERROR
    //     );
    //   }
    // }
    const newPostPayment = await postPaymentService.createNewPostPayment(
      payload,
      PostStatus.ACTIVE
    );

    //Demo 1minutes expired time
    await postQueue.addPostExpireJob({
      postId: newPostPayment.postId,
      userEmail: user.email,
      ttl: 60000 * 60 * 24, //24 hours
      // ttl: 60000, //1 minute
    });

    return res.status(200).json({
      success: true,
      message: "Tạo thanh toán bài đăng thành công!",
      data: newPostPayment.toJSON(),
    });
  } catch (error) {
    next(error);
  }
};

const createPaymentLink = async (req, res, next) => {
  try {
    const { orderCode } = req.query;
    const response = await postPaymentService.createPaymentLink(orderCode);
  } catch (error) {
    next(error);
  }
};
const getPaymentLinkInfo = async (req, res, next) => {
  try {
    const { orderCode } = req.query;
    const response = await postPaymentService.getPaymentLinkInfo(orderCode);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

//https://ecc3-2405-4803-f58b-6e70-992f-632d-2eb4-ebf2.ngrok-free.app/api/v1/post-payments/complete-payment
const completePostPayment = async (req, res, next) => {
  try {
    const postPaymentId = req.body.data.orderCode;
    const response = await postPaymentService.completePostPaymentService(
      postPaymentId
    );
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
const deletePostPayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await postPaymentService.deletePostPaymentService(id);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

export {
  createNewPostPayment,
  getPaymentLinkInfo,
  completePostPayment,
  deletePostPayment,
  createPaymentLink,
};
