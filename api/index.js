const express = require("express");
const router = express.Router();

const shows = require("./routes/Show.route");
const clients = require("./routes/Client.route");
const tickets = require("./routes/Ticket.route");

router.use("/shows", shows);
router.use("/clients", clients);
router.use("/tickets", tickets);

module.exports = router;
