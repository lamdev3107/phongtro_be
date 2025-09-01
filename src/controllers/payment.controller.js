import * as paymentService from "../services/payment.service";

export const checkPayment = async (req, res, next) => {
  try {
    const body = req.body;
    const response = await paymentService.checkPaymentService(body);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
