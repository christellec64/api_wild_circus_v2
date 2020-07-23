const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const Family = sequelizeInstance.define("Family", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  age: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  comment: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
});

module.exports = Family;
