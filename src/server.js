import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import initRoutes from "./routes/index.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import connectDatabase from "./config/database.config.js";
import { redisClient, connectRedis } from "./config/redis.config.js";

const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    //Chan tat ca cac domain khac ngoai domain nay
    // origin: process.env.CLIENT_URL,
    origin: true,
    //Production domain
    // origin: "https://sfotipy-frontend.vercel.app",
    credentials: true, //Để bật cookie HTTP qua CORS
  })
);
initRoutes(app);
connectDatabase();

// Kết nối Redis và khởi tạo workers sau khi database đã kết nối
const initializeRedisAndWorkers = async () => {
  try {
    await connectRedis();
    console.log("🚀 Redis ready, initializing workers...");
    await import("./workers/index.js");
  } catch (error) {
    console.error("❌ Failed to initialize Redis and workers:", error);
  }
};

// Khởi tạo Redis và workers sau khi database đã kết nối
setTimeout(initializeRedisAndWorkers, 2000);

const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
  console.log(`Server is running on the port ${listener.address().port}`);
});
