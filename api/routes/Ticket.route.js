const express = require("express");
const router = express.Router();
const Ticket = require("../../models/Ticket");

router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findAll({
      where: { id },
    });
    res.status(200).json(ticket);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  const { price, label } = req.body;
  try {
    const ticket = await Ticket.create({
      price,
      label,
    });
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { price, label } = req.body;
  const { id } = req.params;
  try {
    const ticket = await Ticket.update(
      {
        price,
        label,
      },
      { where: { id } }
    );
    res.status(202).json(ticket);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Ticket.destroy({
      where: { id },
    });
    res.status(205).send("Ticket deleted");
  } catch (err) {
    res.status(422).json(err);
  }
});

module.exports = router;
