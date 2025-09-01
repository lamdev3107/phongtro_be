import { StatusCodes } from "http-status-codes";
import payos from "../config/payOS.config";
import ApiError from "../utils/apiError";

const createPaymentLink = async (data) => {
  try {
    const paymentLink = await payos.createPaymentLink(data);
    return paymentLink;
  } catch (err) {
    throw new ApiError(err.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export { createPaymentLink };
