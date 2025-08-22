import * as postPaymentService from "../services/postPayment.service";

const createNewPostPayment = async (req, res, next) => {
  try {
    const response = await postPaymentService.createNewPostPayment(req.body);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
const getPaymentLinkInfo = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const response = await postPaymentService.getPaymentLinkInfo(orderId);
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
};
