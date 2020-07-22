const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const TicketType = sequelizeInstance.define("TicketType", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  label: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
});

module.exports = TicketType;
