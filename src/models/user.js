"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, { foreignKey: "userId", as: "user" });

      User.hasMany(models.Post, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      }); // Khi xóa User, xóa luôn các bản ghi liên quan trong Report
      User.belongsToMany(models.Post, {
        through: models.Wishlist,
        foreignKey: "userId",
        onDelete: "CASCADE", // Khi xóa Wishlist, xóa luôn các bản ghi liên quan trong Wishlist_Post
      });
    }
  }
  User.init(
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
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 8, // Tuổi tối thiểu là 18
          max: 200, // Tuổi tối đa là 200
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Đảm bảo email không trùng lặp
        validate: {
          isEmail: true, // Kiểm tra định dạng email
        },
      },
      role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user", // Mặc đ��nh role của user là user
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [10, 10], // Số điện thoại có 10 ký tự
        },
      },
      zalo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fbUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      passwordResetToken: DataTypes.STRING,
      passwordResetExpireDate: DataTypes.DATE,
      verified: DataTypes.BOOLEAN,
      otp: DataTypes.STRING,
      otpExpireTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true, // Thêm timestamps để Sequelize tự động cập nhật createdAt & updatedAt
    }
  );
  return User;
};
