import { Op } from "sequelize";
import db from "../models";
import bcrypt from "bcryptjs";

const getMyPostsService = async (
  userId,
  sortBy = "createdAt",
  sort = "desc",
  page = 1,
  limit = 10,
  status,
  keyword
) => {
  try {
    let whereClause = { userId };

    if (status) {
      whereClause.status = status;
    }

    if (keyword) {
      whereClause.title = { [Op.like]: `%${keyword}%` }; // search theo title
    }

    // Pagination
    const offset = (page - 1) * limit;

    // Sorting
    const order = [[sortBy, sort.toUpperCase()]]; // ASC | DESC

    // Query posts
    const { rows: posts, count: total } = await db.Post.findAndCountAll({
      attributes: [
        "id",
        "title",
        "slug",
        "price",
        "priceUnit",
        "status",
        "acreage",
        "description",
        "createdAt",
        "updatedAt",
      ],
      where: whereClause,
      include: [
        {
          model: db.Category,
          as: "category",
          attributes: ["name"],
        },
        {
          model: db.Image,
          as: "images",
          attributes: ["imageURL"],
        },
        {
          model: db.Address,
          as: "address",
        },
        {
          model: db.User,
          as: "user",
          attributes: ["name", "zalo", "phone"],
        },
        {
          model: db.PostPayment,
          as: "payment",
          required: false, // false => LEFT JOIN
          include: [
            {
              model: db.PostPackage,
              as: "postPackage",
              include: [
                {
                  model: db.TimePackage,
                  as: "timePackage",
                  attributes: ["name", "dayCount"],
                },
                {
                  model: db.PostType,
                  as: "postType",
                  attributes: ["name", "uppercase", "color", "postSize"],
                },
              ],
            },
          ],
        },
      ],
      order,
      limit,
      offset,
      distinct: true, // fix count khi có include
    });

    return {
      data: posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (err) {
    throw err;
  }
};

const getMyPostPaymentsService = async (userId, page, limit) => {
  try {
    const postPayment = await db.PostPayment.findAll({
      include: [
        {
          model: db.Post,
          as: "post",
          attributes: ["title", "userId", "status"],
          where: {
            userId: userId,
          },
        },
        {
          model: db.PostPackage,
          as: "postPackage",
          include: [
            {
              model: db.TimePackage,
              as: "timePackage",
              attributes: ["name", "dayCount"],
            },
            {
              model: db.PostType,
              as: "postType",
            },
          ],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return postPayment;
  } catch (err) {
    throw err;
  }
};

const updateMyAccountService = async (userId, data) => {
  try {
    const account = await db.User.findByPk(userId);
    if (!account) {
      throw new ApiError("Account not found", StatusCodes.NOT_FOUND);
    }
    const updatedAccount = await account.update(data);
    const returnData = {
      id: updatedAccount.id,
      name: updatedAccount.name,
      email: updatedAccount.email,
      phone: updatedAccount.phone,
      zalo: updatedAccount.zalo,
      avatar: updatedAccount.avatar,
      role: updatedAccount.role,
    };
    return returnData;
  } catch (err) {
    throw err;
  }
};

const getMyAccountService = async (userId) => {
  try {
    const account = await db.User.findByPk(userId);
    if (!account) {
      throw new ApiError("Account not found", StatusCodes.NOT_FOUND);
    }
    return account;
  } catch (err) {
    throw err;
  }
};

export {
  getMyPostsService,
  getMyPostPaymentsService,
  updateMyAccountService,
  getMyAccountService,
};
