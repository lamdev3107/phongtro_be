import { StatusCodes } from "http-status-codes";
import * as authService from "../services/auth.service";
import ApiError from "../utils/apiError";
const register = async (req, res, next) => {
  const { name, email, phone, password } = req.body;
  try {
    if (!name || !email || !phone || !req.body.password) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "Missing parameters");
    }

    const response = await authService.register(req.body);
    if (response?.error) {
      throw new ApiError(response.error, response.message);
    }
    //Return user data without password
    const { password, ...returnData } = response.user;
    req.userId = returnData.id;
    next();
  } catch (error) {
    next(error);
  }
};

const sendOTP = async (req, res, next) => {
  try {
    const userId = req.userId;
    let response = await authService.sendOTP(userId);
    if (response) {
      return res.status(200).json({
        success: true,
        message: response.message,
      });
    }
  } catch (err) {
    next(err);
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !req.body.password)
      throw new ApiError(StatusCodes.BAD_REQUEST, "Missing parameters");
    const response = await authService.login(email, password);
    if (response) {
      res.cookie("refreshToken", response.refreshToken, {
        //maxAge: 30s
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
      });
      return res.status(StatusCodes.OK).json({
        success: true,
        message: response.message,
        data: response.user,
        token: response.accessToken,
      });
    }
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const verifyEmail = async (req, res, next) => {
  const { email, otp } = req.body;

  try {
    if (!otp || !email)
      throw new ApiError(StatusCodes.BAD_REQUEST, "Missing parameters");
    const response = await authService.verifyEmail(email, otp);
    if (response) {
      res.cookie("refreshToken", response.refreshToken, {
        //maxAge: 30s
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
      });
      return res.status(200).json({
        success: true,
        message: response.message,
        data: response.user,
        token: response.token,
      });
    }
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    let refreshToken = req.cookies.refreshToken;
    const userId = req.user.id;
    const response = await authService.logout(userId, refreshToken);
    if (response) {
      res.clearCookie("refreshToken");
      res.status(StatusCodes.OK).json({
        success: true,
        message: "Logout successfully!",
      });
    }
    //Xoá  refreshToken trong DB
  } catch (err) {
    next(err);
  }
};
const requestRefreshToken = async (req, res, next) => {
  try {
    //Lấy refreshToken từ Cookies
    const refreshToken = req.cookies.refreshToken;
    const userId = req.body.userId;
    const response = await authService.requestRefreshToken(
      refreshToken,
      userId
    );
    //Kiểm tra xem refreshToken có tồn tại hay không, nếu không tức là chưa xác thực
    if (response) {
      //Lưu newRefreshToken vào cookies
      res.cookie("refreshToken", response.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
      });
      return res.status(StatusCodes.OK).json({
        success: true,
        message: response.message,
        accessToken: response.accessToken,
        data: response.user,
      });
    }
  } catch (err) {
    next(err);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const { email, redirect } = req.body;
    if (!email) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "Missing parameters");
    }
    const response = await authService.forgotPassword(email, redirect);

    return res.status(200).json({
      success: true,
      message: response.message,
    });
  } catch (err) {
    next(err);
  }
};
const resetPassword = async (req, res, next) => {
  try {
    const token = req.body.token;
    const password = req.body.password;
    if (!token || !password) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "Missing token or password!");
    }

    const response = await authService.resetPassword(token, password);
    return res.status(200).json({
      success: true,
      message: response.message,
      data: response.user,
    });
  } catch (err) {
    next(err);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const data = req.body;
    const updatedAccount = await authService.changePasswordService(
      userId,
      data
    );
    return res.status(200).json({
      success: true,
      message: "Change password successfully!",
      data: updatedAccount,
    });
  } catch (err) {
    next(err);
  }
};

export {
  sendOTP,
  logout,
  register,
  login,
  verifyEmail,
  requestRefreshToken,
  forgotPassword,
  resetPassword,
};
