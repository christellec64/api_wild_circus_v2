require("dotenv").config();
const Sequelize = require("sequelize");
const { DB_NAME, DB_PASS, DB_USER, DB_DIALECT, DB_HOST } = process.env;

module.exports = new Sequelize({
  host: DB_HOST || "localhost",
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  dialect: DB_DIALECT,
});
