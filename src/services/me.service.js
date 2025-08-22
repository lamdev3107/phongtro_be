import db from "../models";

const getMyPostsService = async (userId, status) => {
  try {
    let whereClause = {
      userId,
    };

    if (status) {
      whereClause = { ...whereClause, status }; // Nếu truyền vào status, thêm điều kiện vào whereClause
    }
    const posts = await db.Post.findAll({
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
              attributes: [],
              include: [
                {
                  model: db.TimePackage,
                  as: "timePackage",
                },
                {
                  model: db.PostType,
                  as: "postType",
                },
              ],
            },
          ],
        },
      ],
    });
    return {
      success: true,
      message: "Get my posts successfully!",
      data: posts,
    };
  } catch (err) {
    throw err;
  }
};
export { getMyPostsService };
