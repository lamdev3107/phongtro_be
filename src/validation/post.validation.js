import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/apiError.js";

/*
Note: Mặc định không cần phải custom message ở phía BE vì để cho FE tự validate và custom message phía BE cho đẹp
- BE chỉ cần validate để đẩm bảo dữ liệu CHUẨN XÁC và trả về message mặc định từ thư viện
- Việc Validate dữ liệu bắt buộc phải có ở phía BE vì đây là điểm cuối để lưu trữ dữ liệu vào Database
- Luôn cần validate dữ liệu cả ở phía BE và FE

*/

const createNewPost = async (req, res, next) => {
  const { name, thumbnail, albumType, isPublic } = req.body;
  const images = req.files;
  const createPostSchema = Joi.object({
    title: Joi.string().trim().required(),

    province: Joi.number().required(),
    district: Joi.number().required(),
    ward: Joi.number().required(),
    address: Joi.string().allow("").trim(),
  });
  try {
    //Chỉ định abortEarly: false => Trường hợp có nhiều lỗi thì trả về tất cả (nếu set là true thì validate trường nào lỗi thì sẽ return luôn mà không validate các trường phía sau)
    await correctCondition.validateAsync(req.body, { abortEarly: false });
    //Validate hợp lệ thì next() => controller
    next();
  } catch (err) {
    const errMessage = err.message;
    const customError = new ApiError(StatusCodes.BAD_REQUEST, errMessage);
    //Trả về mã 400
    next(customError);
  }
};

export { createAlbum };
