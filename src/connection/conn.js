const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("my_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = {
  sequelize,
};
