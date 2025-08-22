import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.config";

// const storage = multer.diskStorage({
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// Configure CloudinaryStorage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  allowedFormats: ["jpg", "png"],
  params: async (req, file) => {
    const folderName = req.body.folder || "PhongTro123"; // ✅ Lấy folder từ request
    return {
      folder: folderName,
      // public_id: file.originalname.split(".")[0], // Optional: Đặt tên file
    };
  },
});

const upload = multer({ storage });

export default upload;
