"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostPackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      PostPackage.belongsTo(models.PostType, {
        foreignKey: "postTypeId",
        as: "postType",
      });
      PostPackage.belongsTo(models.TimePackage, {
        foreignKey: "timePackageId",
        as: "timePackage",
      });
    }
  }
  PostPackage.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      postTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      timePackageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PostPackage",
      timestamps: true, // Thêm timestamps để Sequelize tự động cập nhật createdAt & updatedAt
    }
  );
  return PostPackage;
};
