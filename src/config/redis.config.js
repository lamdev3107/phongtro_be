// redisClient.js
import dotenv from "dotenv";
import Redis from "ioredis";
dotenv.config();
const host = process.env.REDIS_HOST;
const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
});

redisClient.on("error", (err) => console.error("❌ Redis Client Error", err));
redisClient.on("connect", () =>
  console.log("✅ Connected to Redis Cloud", host)
);

// Hàm khởi tạo kết nối Redis, dùng trong server.js

export { redisClient };
