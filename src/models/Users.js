const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection/conn");

const User = sequelize.define(
  "user",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
const user = User;
// sequelize.sync();

module.exports = {
  user,
};
