import postWorker from "./post.worker.js";
import emailWorker from "./email.worker.js";

// Export để dễ quản lý hoặc test
export const workers = {
  postWorker,
  emailWorker,
};
