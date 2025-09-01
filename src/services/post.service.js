import cloudinary from "../config/cloudinary.config";
import db, { sequelize } from "../models";
import { createSlug } from "../utils/common";
import { PostStatus } from "../utils/constants";

export const getPostService = async (id) => {
  try {
    const post = await db.Post.findByPk(id, {
      attributes: [
        "id",
        "title",
        "slug",
        "price",
        "priceUnit",
        "acreage",
        "description",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: db.Category,
          as: "category",
          attributes: ["name", "id"],
        },
        {
          model: db.Image,
          as: "images",
          attributes: ["imageURL"],
        },
        {
          model: db.Address,
          as: "address",
          attributes: ["addressString", "province", "district", "ward"],
        },
        {
          model: db.Attribute,
          as: "attributes",
          attributes: ["id", "name"],
        },
        {
          model: db.User,
          as: "user",
          attributes: [
            "id",
            "name",
            "zalo",
            "phone",
            "email",
            "avatar",
            "createdAt",
          ],
        },
      ],
    });

    const postPayment = await db.PostPayment.findOne({
      where: { postId: post.id },
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
              attributes: [
                "name",
                "postSize",
                "color",
                "colorName",
                "uppercase",
                "autoConfirm",
                "star",
              ],
            },
          ],
        },
      ],
    });

    // Lấy ra số lượng postPayment của user
    const postPaymentCount = await db.PostPayment.count({
      where: { userId: post.user.id },
    });
    post.user.dataValues.postCount = postPaymentCount;
    post.dataValues.payment = postPayment;
    return post;
  } catch (err) {
    throw err;
  }
};

const getPostsService = async (
  orderBy = "createdAt",
  order = "desc",
  page = 1,
  limit = 10
) => {
  try {
    const allowedFields = ["createdAt", "postType"];
    const allowedOrders = ["asc", "desc"];
    const orderField = allowedFields.includes(orderBy) ? orderBy : "createdAt";
    const orderDirection = allowedOrders.includes(order.toLowerCase())
      ? order.toLowerCase()
      : "desc";

    const offset = (parseInt(page) - 1) * parseInt(limit);

    // Truy vấn
    const { rows: posts, count } = await db.Post.findAndCountAll({
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
          attributes: ["addressString", "province", "district", "ward"],
        },
        {
          model: db.User,
          as: "user",
          attributes: ["name", "zalo", "phone"],
        },
        {
          model: db.PostPayment,
          as: "payment",
          required: false,
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
      group: ["Post.id"], // Nhóm theo ID của Post để tránh nhân bản do JOIN
      subQuery: false, // Tránh nhân bản bản ghi khi JOIN với bảng con
      order: [[orderField, orderDirection]],
      limit: parseInt(limit),
      offset: offset,
      logging: console.log, // Log SQL để debug
    });

    return {
      data: posts,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(count.length / limit),
        totalRecords: count.length,
      },
    };
  } catch (error) {
    console.error("Error in getPostsService:", error);
    throw error;
  }
};

const createNewPostService = async (data) => {
  const transaction = await db.sequelize.transaction();

  try {
    // 1. Tạo Post
    const createdPost = await db.Post.create(
      {
        description: data.description,
        categoryId: data.categoryId,
        title: data.title,
        userId: data.userId,
        status: PostStatus.UNPAID,
        slug: createSlug(data.title),
        price: data.price,
        priceUnit: data.priceUnit,
        acreage: data.acreage,
      },
      {
        raw: true,
        transaction, // ✅ gộp chung vào options
      }
    );

    // 2. Tạo Address
    await db.Address.create(
      {
        postId: createdPost.id,
        ...data.address,
      },
      {
        raw: true,
        transaction,
      }
    );

    // 3. Tạo AttributesPost
    if (data.attributes) {
      const attributes = data.attributes.map((attributeId) => ({
        attributeId,
        postId: createdPost.id,
      }));
      await db.PostAttribute.bulkCreate(attributes, { transaction });
    }

    // 4. Tạo Images
    const images = data.images.map((image) => ({
      imageURL: image.path,
      publicId: image.filename,
      postId: createdPost.id,
    }));

    await db.Image.bulkCreate(images, { transaction });

    // ✅ Commit Transaction
    await transaction.commit();

    // 5. Lấy lại dữ liệu post vừa tạo (ngoài transaction)
    const post = await db.Post.findByPk(createdPost.id, {
      attributes: [
        "title",
        "slug",
        "price",
        "priceUnit",
        "acreage",
        "description",
        "createdAt",
        "updatedAt",
      ],
      include: [
        { model: db.Category, as: "category", attributes: ["name", "id"] },
        {
          model: db.Image,
          as: "images",
          attributes: ["imageURL", "id", "publicId"],
        },
        { model: db.Address, as: "address" },
        { model: db.Attribute, as: "attributes" },
        { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
        {
          model: db.PostPayment,
          as: "payment",
          include: [
            {
              model: db.PostPackage,
              as: "postPackage",
              include: [
                { model: db.TimePackage, as: "timePackage" },
                { model: db.PostType, as: "postType" },
              ],
            },
          ],
        },
      ],
    });

    return post;
  } catch (error) {
    // ✅ Chỉ rollback nếu transaction chưa kết thúc
    if (!transaction.finished) {
      await transaction.rollback();
    }
    throw error;
  }
};

const updatePostService = async (id, data) => {
  const transaction = await db.sequelize.transaction();
  try {
    const post = await db.Post.findByPk(id, { transaction });
    if (!post) {
      throw new Error("Post not found!");
    }
    await post.update(
      {
        description: data.description,
        categoryId: data.categoryId,
        title: data.title,
        slug: createSlug(data.title),
        price: data.price,
        priceUnit: data.priceUnit,
        acreage: data.acreage,
        description: data.description,
      },
      { transaction }
    );
    const address = await db.Address.findOne(
      {
        postId: post.id,
      },
      { transaction }
    );
    await address.update(data.address, { transaction });
    await db.PostAttribute.destroy({ where: { postId: id } }, { transaction });
    if (data.attributes) {
      const attributes = data.attributes.map((attributeId) => ({
        attributeId: attributeId,
        postId: post.id,
      }));
      await db.PostAttribute.bulkCreate(attributes, { transaction });
    }

    const oldImages = await db.Image.findAll({
      where: { postId: id },
      transaction,
    });
    if (oldImages) {
      for (let img of oldImages) {
        await cloudinary.uploader.destroy(img.publicId);
      }
    }
    // 🔹 2. Xóa ảnh cũ khỏi database
    await db.Image.destroy({ where: { postId: post.id } }, { transaction });
    const images = data.images.map((image) => ({
      imageURL: image.path,
      publicId: image.filename,
      postId: post.id,
    }));
    await db.Image.bulkCreate(images, { transaction });

    await transaction.commit();
    return {
      success: true,
      message: "Update post successfully!",
      data: null,
    };
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};

const checkExpiredPostService = async (postId, userEmail, postPaymentId) => {
  try {
    const postPayment = await db.PostPayment.findByPk(postPaymentId);
    if (!postPayment) {
      throw new Error("Post payment not found!");
    }
    if (postPayment.expiredDate < new Date()) {
      await db.Post.update({ status: "expired" }, { where: { id: postId } });
    }
    mailService.sendEmail({
      to: userEmail,
      subject: "Tin đăng của bạn đã hết hạn",
      html: expiredPostMailTemplate(postId),
    });
  } catch (err) {
    throw err;
  }
};

export {
  createNewPostService,
  updatePostService,
  getPostsService,
  checkExpiredPostService,
};
