import db from "../models";

const createNewTimePackageService = async (data) => {
  try {
    const newTimePackage = await db.TimePackage.create(data);
    return newTimePackage;
  } catch (err) {
    throw err;
  }
};

const getTimePackagesService = async () => {
  try {
    const timePackages = await db.TimePackage.findAll({
      raw: true,
      order: [["createdAt", "DESC"]],
    });
    return {
      success: true,
      message: "Lấy danh sách gói thời gian thành công!",
      data: timePackages,
    };
  } catch (err) {
    throw err;
  }
};

export { createNewTimePackageService, getTimePackagesService };
