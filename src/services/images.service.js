const { default: cloudinary } = require("../config/cloudinary.config");

const createNewImagesService = async () => {
  try {
  } catch (err) {
    throw err;
  }
};

const uploadImagesService = async (images) => {
  try {
    const uploadedImages = [];
    for (let image of images) {
      const results = await cloudinary.uploader.upload(image);
      uploadedImages.push({
        id: results.secure_id,
        imgURL: results.secure_url,
      });
    }
    return uploadedImages;
  } catch (err) {
    throw err;
  }
};

export { uploadImagesService };
