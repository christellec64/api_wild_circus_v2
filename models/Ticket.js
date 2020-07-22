const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const Ticket = sequelizeInstance.define("Ticket", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  purchase_date: {
    type: Sequelize.DATE(),
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT(),
    allowNull: false,
  },
});

module.exports = Ticket;
