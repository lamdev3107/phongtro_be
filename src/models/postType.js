"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PostType.belongsToMany(models.TimePackage, {
        through: models.PostPackage, // Bảng trung gian
        foreignKey: "postTypeId",
        as: "timePackages",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  PostType.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      colorName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uppercase: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postSize: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      autoConfirm: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      imageDemo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      star: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "PostType",
      timestamps: true, // Thêm timestamps để Sequelize tự động cập nhật createdAt & updatedAt
    }
  );
  return PostType;
};
