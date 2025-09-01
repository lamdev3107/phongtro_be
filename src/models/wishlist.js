"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    static associate(models) {
      Wishlist.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      Wishlist.belongsTo(models.Post, { foreignKey: "postId", as: "post" });
    }
  }
  Wishlist.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: DataTypes.STRING,
      postId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Wishlist",
      timestamps: true, // Thêm timestamps để Sequelize tự động cập nhật createdAt & updatedAt
    }
  );
  return Wishlist;
};
