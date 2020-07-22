const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const Ticket = sequelizeInstance.define("Ticket", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  price: {
    type: Sequelize.FLOAT(),
    allowNull: false,
  },
  label: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
});

module.exports = Ticket;
