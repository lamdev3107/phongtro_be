import { StatusCodes } from "http-status-codes";
import db from "../models";

const createNewPostPackageService = async (data) => {
  try {
    const newPostPackage = await db.PostPackage.create(data);
    return newPostPackage;
  } catch (err) {
    throw err;
  }
};

const getPostPackageByTimePackageId = async (timePackageId = null) => {
  try {
    let whereClause = {};
    if (timePackageId) {
      whereClause = {
        timePackageId: timePackageId,
      };
    }
    const postPackages = await db.PostPackage.findAll({
      include: [
        {
          model: db.TimePackage, // Thông tin bảng TimePackage
          as: "timePackage",
          attributes: ["name", "dayCount"], // Các cột cần lấy từ TimePackage
        },
        {
          model: db.PostType, // Thông tin bảng PostType
          as: "postType",
          attributes: [
            "name",
            "postSize",
            "color",
            "colorName",
            "uppercase",
            "autoConfirm",
            "star",
            "imageDemo",
            "description",
          ], // Các cột cần lấy từ PostType
        },
      ],
      order: [["id", "ASC"]], // Sắp xếp theo thời gian
      where: whereClause,
    });

    return postPackages;
  } catch (err) {
    throw err;
  }
};
const deletePostPackageService = async (id) => {
  try {
    const postPackage = await db.PostPackage.findByPk(id);
    if (!postPackage) {
      throw new ApiError("Gói tin không tồn tại!", StatusCodes.NOT_FOUND);
    }
    await postPackage.destroy();
    return null;
  } catch (err) {
    throw err;
  }
};

const getPostPackageByIdService = async (id) => {
  try {
    const postPackage = await db.PostPackage.findByPk(id, {
      include: [
        {
          model: db.TimePackage,
          as: "timePackage",
          attributes: ["name", "dayCount"],
        },
        {
          model: db.PostType,
          as: "postType",
          attributes: [
            "name",
            "postSize",
            "color",
            "colorName",
            "uppercase",
            "autoConfirm",
            "star",
            "imageDemo",
            "description",
          ],
        },
      ],
      // attributes: ["id", "price", "timePackageId", "postTypeId"],
    });
    return postPackage;
  } catch (err) {
    throw err;
  }
};

const updatePostPackageService = async (id, payload) => {
  const transaction = await db.sequelize.transaction();
  try {
    await db.PostPackage.update(
      payload,
      {
        where: {
          id: id,
        },
      },
      transaction
    );
    const updatedPostPackage = await db.PostPackage.findByPk(id, {
      raw: true,
    });
    // 4. Commit Transaction nếu tất cả thành công
    await transaction.commit();
    return updatedPostPackage;
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};

const getPostPackageGroupService = async () => {
  try {
    const postPackages = await db.PostType.findAll({
      include: [
        {
          model: db.TimePackage,
          as: "timePackages",
          through: {
            attributes: ["price"], // Lấy giá từ bảng PostPackage
          },
          attributes: ["id", "name", "dayCount"], // Chỉ lấy các trường cần thiết từ TimePackage
        },
      ],
      attributes: [
        "id",
        "name",
        "colorName",
        "uppercase",
        "color",
        "postSize",
        "autoConfirm",
        "imageDemo",
        "star",
        "description",
      ],
      limit: 5, // Chỉ lấy 5 loại tin
      // raw: true,
      order: [["id", "DESC"]], // Đảm bảo thứ tự sắp xếp theo id
    });
    return postPackages;
  } catch (err) {
    throw err;
  }
};
export {
  createNewPostPackageService,
  getPostPackageByTimePackageId,
  deletePostPackageService,
  updatePostPackageService,
  getPostPackageGroupService,
  getPostPackageByIdService,
};
