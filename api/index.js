const express = require("express");
const router = express.Router();

const shows = require("./routes/Show.route");
const clients = require("./routes/Client.route");
const tickets = require("./routes/Ticket.route");
const mail = require("./routes/Mail.route");
const booking = require("./routes/Booking.route");

router.use("/shows", shows);
router.use("/clients", clients);
router.use("/tickets", tickets);
router.use("/contact", mail);
router.use("/booking", booking);

module.exports = router;
