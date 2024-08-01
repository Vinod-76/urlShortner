const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection/conn");

const Url = sequelize.define(
  "url",
  {
    shortId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    redirect: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    visitHistory: {
      type: DataTypes.JSON, // Use JSON to store an array of objects with timestamps
      allowNull: false,
      defaultValue: [],
    },
  },
  { timestamps: true }
);
const shortURl = Url;
sequelize.sync();

module.exports = {
  shortURl,
};
