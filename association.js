const Show = require("./models/Show");
const Client = require("./models/Client");
const Ticket = require("./models/Ticket");

Show.belongsToMany(Client, { through: Ticket });
Client.belongsToMany(Show, { through: Ticket });