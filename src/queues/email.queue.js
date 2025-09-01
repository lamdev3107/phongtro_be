import { Worker } from "bullmq";
import connection from "../config/redis.js";
import * as mailService from "../services/mail.service.js";

// Worker xử lý queue "emailQueue"
export const emailWorker = new Worker(
  "emailQueue",
  async (job) => {
    if (job.name === "send-email") {
      const { to, subject, body } = job.data;
      console.log(`📧 Sending email to ${to} with subject: ${subject}`);
      // Ở đây bạn có thể tích hợp thư viện gửi mail, ví dụ: nodemailer, SES, Sendgrid...
      await mailService.sendEmail({
        to,
        subject,
        html: body,
      });
    }
  },
  { connection }
);

emailWorker.on("completed", (job) => {
  console.log(`✅ Job ${job.id} (emailQueue) completed`);
});

emailWorker.on("failed", (job, err) => {
  console.error(`❌ Job ${job.id} (emailQueue) failed:`, err);
});

export default emailWorker;
