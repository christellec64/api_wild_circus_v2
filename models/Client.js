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
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  tel: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  birthday: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

module.exports = Client;
