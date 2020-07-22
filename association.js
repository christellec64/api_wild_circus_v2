const Show = require("./models/Show");
const Client = require("./models/Client");
const Ticket = require("./models/Ticket");
const TicketType = require("./models/TicketType");

Show.hasMany(Client, { foreignKey: { allowNull: false } });
Client.belongsTo(Show, { foreignKey: { allowNull: false } });

Show.belongsToMany(Client, { through: Ticket });
Client.belongsToMany(Show, { through: Ticket });

Ticket.belongsTo(TicketType, { foreignKey: { allowNull: false } });
TicketType.hasMany(Ticket, { foreignKey: { allowNull: false } });
