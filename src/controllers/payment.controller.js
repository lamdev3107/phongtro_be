import {
  checkPaymentService,
  createPaymentLinkService,
  momoPaymentService,
} from "../services/payment.service";

export const momoPayment = async (req, res, next) => {
  try {
    const postPaymentId = req.params.postpaymentid;
    const response = await momoPaymentService(postPaymentId);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

export const createPaymentLink = async (req, res, next) => {
  try {
    const postPayment = req.body;
    const response = await createPaymentLinkService(postPayment);
    if (response.success) {
      // res.redirect(303, response.checkoutUrl);
      return res.status(200).json(response);
    }
  } catch (err) {
    next(err);
  }
};

export const checkPayment = async (req, res, next) => {
  try {
    const body = req.body;
    const response = await checkPaymentService(body);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
