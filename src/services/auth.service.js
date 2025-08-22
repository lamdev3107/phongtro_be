import db, { sequelize } from "../models";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
import ApiError from "../utils/apiError";
import otp from "../templates/mail/otp";
import resetPasswordTemplate from "../templates/mail/resetPassword";
import { genAccessToken, genRefreshToken } from "../utils/jwt";
import mailService from "./mailer";
import otpGenerator from "otp-generator";
import { StatusCodes } from "http-status-codes";
import crypto from "crypto";
import { Op } from "sequelize";
import * as redisService from "./redis.service";

require("dotenv").config();

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

const register = async ({ email, password, name }) => {
  try {
    // Check if user with email exists
    const user = await db.User.findOne({
      where: { email },
    });

    if (user) {
      if (user.verified === false) {
        return {
          message: "Registered user but not verified yet",
          user: user.toJSON(),
        };
      } else {
        return {
          error: 409,
          message: "Email already exists",
        };
      }
    }
    const newUser = await db.User.create({
      email,
      name,
      phone,
      verified: false,
      password: hashPassword(password),
    });
    return {
      message: "Register new user successfully!",
      user: newUser.toJSON(),
    };
  } catch (error) {
    throw error;
  }
};

const sendOTP = async (userId) => {
  try {
    const new_otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
    const otpExpireTime = Date.now() + 10 * 60 * 1000; // 10 Mins after otp is sent
    const user = await db.User.findByPk(userId);

    if (user) {
      user.otpExpireTime = otpExpireTime;
      user.otp = new_otp.toString();
      let updatedUser = await user.save(); // Save changes within transaction
      mailService({
        to: updatedUser.email,
        subject: "Xác nhận mã OTP",
        html: otp(updatedUser.name, new_otp),
      });

      return {
        data: updatedUser,
        message: "Send OTP successfully",
      };
    }
  } catch (err) {
    throw err;
  }
};

const login = async (email, password) => {
  try {
    const user = await db.User.findOne({
      where: { email },
      raw: true,
    });
    if (!user) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, "Email is not registered!");
    }
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      throw new ApiError(
        StatusCodes.UNAUTHORIZED,
        "Email or password is incorrect!"
      );
    }
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    const accessToken = await genAccessToken(payload);
    const newRefreshToken = await genRefreshToken(payload);

    // Lưu refreshToken vào Redis với key là "refreshToken:<user.id>"
    // Giá trị là newRefreshToken, thời gian sống (EX) là 7 ngày (tính bằng giây)
    await redisService.saveRefreshToken(user.id, newRefreshToken);

    const returnData = {
      email: user.email,
      name: user.name,
      phone: user.phone,
      role: user.role,
      id: user.id,
      avatar: user.avatar,
      verified: user.verified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return {
      message: "Login successfully",
      user: returnData,
      accessToken: accessToken,
      refreshToken: newRefreshToken,
    };
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      console.log(error.errors.map((e) => e.message));
    } else {
      console.error(error);
    }
    throw error;
  }
};

const verifyEmail = async (email, otp) => {
  try {
    const user = await db.User.findOne(
      {
        where: {
          // Đoạn này là điều kiện truy vấn để tìm user trong database:
          // - email: phải trùng với email truyền vào hàm
          // - otpExpireTime: thời gian hết hạn OTP phải lớn hơn thời điểm hiện tại (tức là OTP vẫn còn hiệu lực)
          email,
          otpExpireTime: { [Op.gt]: Date.now() },
        },
      },
      { raw: true }
    );

    if (!user) {
      throw new ApiError(
        StatusCodes.CONFLICT,
        "Mã OTP đã hết hạn, vui lòng yêu cầu lại mã OTP"
      );
    }
    if (user.verified) {
      throw new ApiError(StatusCodes.CONFLICT, "Tài khoản đã được xác thực");
    }

    const checkOTP = true ? otp === user.otp : false;
    if (!checkOTP) {
      throw new ApiError(StatusCodes.CONFLICT, "Mã OTP không chính xác");
    }

    // OTP is correct
    user.verified = true;
    user.otp = undefined;
    await user.save();
    // // Tạo refresh token cho người dùng
    const payload = {
      id: user.id,
      email: user.email,
    };
    const accessToken = await genAccessToken(payload);
    const newRefreshToken = await genRefreshToken(payload);

    await redisService.saveRefreshToken(user.id, newRefreshToken);

    const {
      password,
      passwordResetExpireDate,
      passwordResetToken,
      passwordChangeAt,
      otpExpireTime,
      ...returnData
    } = user.toJSON();

    return {
      message: "Email is verified, register successfully!",
      refreshToken: newRefreshToken,
      token: accessToken,
      user: returnData,
    };
  } catch (err) {
    throw err;
  }
};

const logout = async (userId, refreshToken) => {
  /*
  ----- 2 Options -----
  1. Xoá tất cả refreshToken của user => logout khỏi tất cả các thiết bị đang đăng nhập (An toàn nhất) => Xoá tất cả token của user
  2. Xoá refreshToken cụ thể => logout khỏi thiết bị đang đăng nhập (Không an toàn) => Xoá token cụ thể của user
  */

  try {
    const checkIsRefreshTokenValid = await redisService.getRefreshToken(
      userId,
      refreshToken
    );
    if (!checkIsRefreshTokenValid)
      throw new ApiError(
        StatusCodes.UNAUTHORIZED,
        "Phiên đăng nhập hết hạn, vui lòng đăng nhập lại"
      );

    const res = await redisService.removeRefreshToken(userId, refreshToken);
    if (!res)
      throw new ApiError(
        StatusCodes.CONFLICT,
        "Logout failed! Can't find refreshToken in redis"
      );
    return {
      success: true,
      message: "Logout successfully!",
      data: null,
    };
  } catch (err) {
    throw err;
  }
};

const forgotPassword = async (email, redirect) => {
  try {
    // 1) Get user based on POSTed email
    const user = await db.User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new ApiError(StatusCodes.CONFLICT, "User not found");
    }

    // 2) Generate the random reset token
    const resetToken = crypto.randomBytes(32).toString("hex");

    user.passwordResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    await user.save();

    // 3) Send it to user's email
    const resetURL = `${redirect}?token=${resetToken}&email=${email}`;

    // 4) Send Email with this Reset URL to user's email address◘
    mailService({
      to: user.email,
      subject: "Reset your password",
      html: resetPasswordTemplate(user.name, resetURL),
    });
    return {
      success: true,
      message: "Token Reset password email sent!",
    };
  } catch (err) {
    throw err;
  }
};

const resetPassword = async (token, password) => {
  let newPassword = password;
  try {
    // 1) Get user based on the token
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await db.User.findOne({
      where: {
        passwordResetToken: hashedToken,
      },
    });

    // 2) If token has  expired or submission is out of time window
    if (!user) {
      throw new ApiError(StatusCodes.CONFLICT, "Token is Invalid or Expired");
    }

    // 3) Update user's password and set passwordResetToken and expiry to null
    user.password = hashPassword(newPassword);
    user.passwordResetToken = null;
    user.passwordResetExpireDate = null;
    await user.save();

    // 4) Log the user in, send JWT
    // const accessToken = await genAccessToken({
    //   userId: user.id,
    //   email: user.email,
    // });
    const {
      password,
      passwordResetExpireDate,
      passwordResetToken,
      otpExpireTime,
      ...returnData
    } = user.toJSON();
    return {
      success: true,
      message: "Password Reseted Successfully",
      user: returnData,
    };
  } catch (err) {
    throw err;
  }
};

const requestRefreshToken = async (refreshToken, userId) => {
  //Kiểm tra xem refreshToken có tồn tại hay không, nếu không tức là chưa xác thực
  try {
    if (!refreshToken) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, "You're not authenticated");
    }

    const refreshTokenFromRedis = await redisService.getRefreshToken(
      userId,
      refreshToken
    );

    //Check xem refresh token có phải của chính user không
    if (refreshTokenFromRedis !== refreshToken) {
      throw new ApiError(
        StatusCodes.UNAUTHORIZED,
        "Phiên đăng nhập hết hạn, vui lòng đăng nhập lại"
      );
    }
    //Có được refreshToken rồi thì kiểm tra refreshToken có chính xác hay không,
    //Nếu refreshToken chính xác thì lấy ra payload và tạo ra newAccessToken và newRefreshToken mới
    const decoded = await new Promise((resolve, reject) => {
      // Tại sao lại trả về decode là undefined?
      // Lý do có thể là do bạn đang truyền vào chuỗi token và secret cứng (hardcode),
      // không phải là refreshToken thực tế và secret thực tế của hệ thống.
      // Ngoài ra, nếu token hoặc secret không đúng, jwt.verify sẽ trả về lỗi và decoded sẽ là undefined.
      // Để đúng, bạn nên truyền refreshToken và secret từ biến môi trường.

      jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, decoded) => {
        if (err) {
          console.log("Check err", err);
          return reject(
            new ApiError(StatusCodes.FORBIDDEN, "Unvalid refresh token")
          );
        }
        resolve(decoded);
      });
    });

    //Xóa refreshToken cũ
    await redisService.removeRefreshToken(userId, refreshToken);

    //Create new access token và refresh token
    const payload = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    };
    const newAccessToken = await genAccessToken(payload);
    const newRefreshToken = await genRefreshToken(payload);
    let user = await db.User.findByPk(userId);

    await redisService.saveRefreshToken(user.id, newRefreshToken);

    const {
      password,
      passwordResetExpireDate,
      passwordResetToken,
      passwordChangeAt,
      otpExpireTime,
      ...returnData
    } = user.toJSON();
    const response = {
      message: "Refresh token successfully",
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      user: returnData,
    };

    return response;
  } catch (err) {
    throw err;
  }
};
export {
  register,
  login,
  logout,
  sendOTP,
  verifyEmail,
  forgotPassword,
  resetPassword,
  requestRefreshToken,
};
