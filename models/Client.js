const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const Client = sequelizeInstance.define("Client", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  lastName: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  firstName: {
    type: Sequelize.DATE(),
    allowNull: false,
  },
  tel: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  birthday: {
    type: Sequelize.DATE(),
    allowNull: false,
  },
});

module.exports = Client;
