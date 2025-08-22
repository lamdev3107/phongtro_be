import { redisClient } from "../config/redis.config";
import dotenv from "dotenv";
dotenv.config();

export async function saveRefreshToken(userId, token) {
  // Lưu refreshToken vào Redis với key là `refreshToken:${userId}:${token}`
  // Tham số:
  //   - `refreshToken:${userId}:${token}`: key duy nhất cho mỗi refreshToken của user
  //   - "1": giá trị lưu, chỉ là placeholder (không quan trọng nội dung)
  //   - "EX": thiết lập thời gian hết hạn (expire) cho key
  //   - process.env.REFRESH_TOKEN_EXPIRE: số giây key sẽ tồn tại (ví dụ: 7 ngày = 604800 giây)
  const expireInSecond = process.env.REFRESH_EXPIRES_IN;
  await redisClient.set(
    `refreshToken:${userId}:${token}`,
    "1",
    "EX",
    expireInSecond
  );
}

export async function getRefreshToken(userId, token) {
  const key = `refreshToken:${userId}:${token}`;
  const exists = await redisClient.exists(key);
  if (exists) {
    return token;
  }
  return null;
}

// Xoá refreshToken cụ thể
export async function removeRefreshToken(userId, token) {
  // Xoá refreshToken cụ thể trong Redis (theo key dạng "refreshToken:${userId}:${token}")
  const key = `refreshToken:${userId}:${token}`;
  const result = await redisClient.del(key);
  return result;
}

// Xoá tất cả refreshToken của user
export async function removeAllRefreshTokens(userId) {
  return await redisClient.del(`refreshTokens:${userId}`);
}
