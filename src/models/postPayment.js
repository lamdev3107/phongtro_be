"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PostPayment extends Model {
    static associate(models) {
      PostPayment.belongsTo(models.Post, { foreignKey: "postId", as: "post" });
      PostPayment.belongsTo(models.PostPackage, {
        foreignKey: "postPackageId",
        as: "postPackage",
      });
    }
  }

  PostPayment.init(
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
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      postPackageId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      expiredDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("paid", "unpaid"),
        defaultValue: "unpaid",
      },
    },
    {
      sequelize,
      modelName: "PostPayment",
      timestamps: true, // Thêm timestamps để Sequelize tự động cập nhật createdAt & updatedAt
    }
  );

  return PostPayment;
};
