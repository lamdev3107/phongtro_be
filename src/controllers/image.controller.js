const { default: cloudinary } = require("../config/cloudinary.config");

const uploadImages = async (req, res, next) => {
  try {
    const images = req.files.map((file) => file.path);
  } catch (err) {
    next(err);
  }
};

export { uploadImages };
