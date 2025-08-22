import db from "../models";
const PayOS = require("@payos/node");
import dotenv from "dotenv";

dotenv.config();

// const payos = new PayOS(
//   "75f202c4-d636-4931-a17b-660bc312980d",
//   "db3f2a47-cf50-48c9-8faf-a4dbb9c5033e",
//   "59e7cd76e0ac690fcf85d63e48ddc2a71042adbb379c04bd45bdd2be62df8315"
// );
const payos = new PayOS(
  process.env.PAYOS_CLIENTID,
  process.env.PAYOS_APIKEY,
  process.env.PAYOS_CHECKSUM_KEY
);
const createNewPostPayment = async (data) => {
  try {
    // Tạo mới giao dịch
    const { returnUrl, ...postPayment } = data;

    const newPostPayment = await db.PostPayment.create(postPayment);
    let paymentPayload = {
      amount: newPostPayment.totalPrice,
      description: `Thanh toán tin đăng ${newPostPayment.postId}`,
      orderCode: newPostPayment.id,
      returnUrl:
        process.env.CLIENT_URL +
        "/quan-ly/tin-dang/danh-sach-bai-dang?postStatus=active",
      cancelUrl: returnUrl,
    };

    const paymentLink = await payos.createPaymentLink(paymentPayload);

    if (paymentLink) {
      return {
        success: true,
        message: "Tạo link thanh toán thành công!",
        data: newPostPayment.toJSON(),
        checkoutUrl: paymentLink.checkoutUrl,
      };
    } else {
      throw new Error("Create payment link faiied");
    }
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
      { status: "paid" },
      { where: { id: postPaymentId }, transaction }
    );
    await db.Post.update(
      { status: "active" },
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

export {
  createNewPostPayment,
  getPaymentLinkInfo,
  deletePostPaymentService,
  completePostPaymentService,
};
