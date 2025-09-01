"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsToMany(models.User, {
        through: models.Wishlist,
        foreignKey: "postId",
        onDelete: "CASCADE", // Khi xóa Wishlist, xóa luôn các bản ghi liên quan trong Wishlist
      });
      Post.belongsToMany(models.Attribute, {
        through: models.PostAttribute,
        as: "attributes",
        foreignKey: "postId",
        onDelete: "CASCADE",
      });
      Post.hasMany(models.Report, { foreignKey: "postId", as: "report" });
      Post.hasMany(models.Image, { foreignKey: "postId", as: "images" });
      Post.hasOne(models.Address, {
        foreignKey: "postId",
        as: "address",
      });
      Post.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
      Post.hasOne(models.PostPayment, { foreignKey: "postId", as: "payment" });
      Post.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      priceUnit: {
        type: DataTypes.ENUM,
        values: ["đồng/tháng", "đồng/m2/tháng"], // Enum values
        allowNull: false,
      },
      acreage: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("active", "hidden", "expired", "unpaid"),
        defaultValue: "active",
      },
    },
    {
      sequelize,
      modelName: "Post",
      timestamps: true, // Thêm timestamps để Sequelize tự động cập nhật createdAt & updatedAt
    }
  );
  return Post;
};
