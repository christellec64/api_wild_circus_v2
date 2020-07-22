const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const Show = sequelizeInstance.define("Show", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  title: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  show_date: {
    type: Sequelize.DATE(),
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
});

module.exports = Show;
