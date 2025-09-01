import { Worker } from "bullmq";
import { redisClient } from "../config/redis.config";

export const emailWorker = new Worker(
  "emailQueue",
  async (job) => {
    if (job.name === "send-email") {
      const { to, subject } = job.data;
      console.log(`📧 Sending email to ${to} with subject: ${subject}`);
      // logic gửi mail ở đây
    }
  },
  { connection: redisClient }
);

emailWorker.on("completed", (job) => {
  console.log(`✅ Job ${job.id} (emailQueue) completed`);
});

emailWorker.on("failed", (job, err) => {
  console.error(`❌ Job ${job.id} (emailQueue) failed:`, err);
});

export default emailWorker;
