import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import { StatusCodes } from "http-status-codes";
const verifyAccessToken = (req, res, next) => {
  const token = req.headers.authorization || req.headers.Authorization;
  if (token) {
    //Lấy ra token: VD: Bearer sdfasdfsa => lấy ra sdfasdfsa
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, decoded) => {
      if (err) {
        res.status(StatusCodes.UNAUTHORIZED).json({
          success: false,
          message: "Invalid token",
          data: null,
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(StatusCodes.UNAUTHORIZED).json({
      statusCode: StatusCodes.UNAUTHORIZED,
      message: "You're not authenticated",
    });
  }
};
const verifyAdmin = (req, res, next) => {
  verifyAccessToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      res.status(StatusCodes.FORBIDDEN).json({
        statusCode: StatusCodes.FORBIDDEN,
        message: "You're not allowed to access this",
      });
    }
  });
};

const verifyUser = (req, res, next) => {
  verifyAccessToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.role === "user") {
      next();
    } else {
      res.status(StatusCodes.FORBIDDEN).json({
        statusCode: StatusCodes.FORBIDDEN,
        message: "You're not allowed to access this",
      });
    }
  });
};

export { verifyAccessToken, verifyUser, verifyAdmin };
