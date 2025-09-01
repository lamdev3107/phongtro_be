import authRouter from "./auth.route";
import insertRouter from "./insert.route";
import categoryRouter from "./category.route";
import postRouter from "./post.route";
import userRouter from "./user.route";
import attributeRouter from "./attribute.route";
import postTypeRouter from "./postType.route";
import postPackageRouter from "./postPackage.route";
import timePackageRouter from "./timePackage.route";
import postPaymentRouter from "./postPayment.route";
import paymentRouter from "./payment.route";
import meRouter from "./me.route";
import { errorHandlingMiddleware } from "../middlewares/errorHandlingMiddleware";
import rateLimit from "express-rate-limit";
const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minutes
  max: 100, // Giới hạn mỗi IP được gửi tối đa 50 yêu cầu trong 1 phút
  standardHeaders: "draft-8", // Ghi thông tin Rate Limit vào header `RateLimit-*`
  legacyHeaders: false, // Tắt các header lỗi thời `X-RateLimit-*`
  handler: function (req, res) {
    //Hàm handler khi vượt quá lần gửi request
    res.status(429).send({
      status: 500,
      message: "Bạn đã vượt quá số lượng yêu cầu cho phép!",
    });
  },
  skip: (req, res) => {
    //Hàm skip rate limit dành cho địa chỉ IP
    if (req.ip === "192.168.1.3") return true;
    return false;
  },
});
const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/insert", insertRouter);
  app.use("/api/v1/categories", categoryRouter);
  app.use("/api/v1/posts", postRouter);
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/post-types", postTypeRouter);
  app.use("/api/v1/post-packages", postPackageRouter);
  app.use("/api/v1/time-packages", timePackageRouter);
  app.use("/api/v1/attributes", attributeRouter);
  app.use("/api/v1/post-payments", postPaymentRouter);
  app.use("/api/v1/me", meRouter);
  app.use("/api/v1/payment", paymentRouter);
  app.use("/api/v1/address", wishlistRouter);

  //Error handling
  app.use(errorHandlingMiddleware);

  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

export default initRoutes;
