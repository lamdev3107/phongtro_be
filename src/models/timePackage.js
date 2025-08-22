"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TimePackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
    
     */
    static associate(models) {
      // define association here
      TimePackage.belongsToMany(models.PostType, {
        through: models.PostPackage,
        foreignKey: "timePackageId",
        as: "postTypes",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  TimePackage.init(
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
      dayCount: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "TimePackage",
    }
  );
  return TimePackage;
};
