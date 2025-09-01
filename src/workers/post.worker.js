import { Worker } from "bullmq";
import { redisClient } from "../config/redis.config";
import { checkExpiredPostService } from "../services/post.service";

const postWorker = new Worker(
  "postQueue",
  async (job) => {
    if (job.name === "expire-post") {
      const { postId, userEmail } = job.data;
      console.log(`⏳ Expiring post ID: ${postId}`);
      await checkExpiredPostService(postId, userEmail);
    }
  },
  { connection: redisClient }
);

postWorker.on("completed", (job) => {
  console.log(`✅ Job ${job.id} completed`);
});

postWorker.on("failed", (job, err) => {
  console.error(`❌ Job ${job.id} failed:`, err);
});

export default postWorker;
