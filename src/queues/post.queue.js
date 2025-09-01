import { Queue } from "bullmq";
import { redisClient } from "../config/redis.config";

const POST_QUEUE_NAME = "postQueue";

export const postQueue = new Queue(POST_QUEUE_NAME, {
  connection: redisClient,
});

const addPostExpireJob = async ({ postId, userEmail, ttl, postPaymentId }) => {
  try {
    await postQueue.add(
      "expire-post",
      { postId, userEmail, postPaymentId },
      {
        delay: ttl,
        attempts: 3, // Số lần thử lại nếu thất bại
        removeOnComplete: true,
        removeOnFail: false,
      }
    );
    console.log(
      `[postQueue] Đã thêm job hết hạn bài đăng (postId: ${postId}) với delay ${ttl}ms`
    );
  } catch (error) {
    console.error(`[postQueue] Lỗi khi thêm job hết hạn bài đăng:`, error);
    throw error;
  }
};

export { addPostExpireJob };
