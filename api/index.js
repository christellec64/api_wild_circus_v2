const express = require("express");
const router = express.Router();

const shows = require("../models/Show");
const clients = require("../models/Client");
const tickets = require("../models/Ticket");
const ticketType = require("../models/TicketType");

router.use("/shows", shows);
router.use("/clients", clients);
router.use("/tickets", tickets);
router.use("/ticketType", ticketType);

module.exports = router;
