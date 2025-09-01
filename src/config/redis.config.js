// redisClient.js
import dotenv from "dotenv";
import Redis from "ioredis";
dotenv.config();
const host = process.env.REDIS_HOST;

// Cấu hình Redis cho BullMQ 5.x
const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: null, // Bắt buộc cho BullMQ 5.x
  enableReadyCheck: false, // Tắt kiểm tra sẵn sàng để tránh lỗi
  lazyConnect: true, // Kết nối lười để tránh lỗi khởi động
});

redisClient.on("error", (err) => console.error("❌ Redis Client Error", err));
redisClient.on("connect", () =>
  console.log("✅ Connected to Redis Cloud", host)
);

// Hàm khởi tạo kết nối Redis, dùng trong server.js
export const connectRedis = async () => {
  try {
    await redisClient.ping();
    console.log("✅ Redis connection established");
    return true;
  } catch (error) {
    console.error("❌ Redis connection failed:", error);
    return false;
  }
};

export { redisClient };
