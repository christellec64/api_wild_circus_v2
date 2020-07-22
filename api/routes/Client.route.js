const express = require("express");
const router = express.Router();
const Client = require("../../models/Client");

router.get("/", async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findAll({
      where: { id },
    });
    res.status(200).json(client);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  const { lastName, firstName, tel, email, birthday } = req.body;
  try {
    const client = await Client.create({
      lastName,
      firstName,
      tel,
      email,
      birthday,
    });
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { lastName, firstName, tel, email, birthday  } = req.body;
  const { id } = req.params;
  try {
    const client = await Client.update(
      {
        lastName,
        firstName,
        tel,
        email,
        birthday,
      },
      { where: { id } }
    );
    res.status(202).json(client);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Client.destroy({
      where: { id },
    });
    res.status(205).send("Client deleted");
  } catch (err) {
    res.status(422).json(err);
  }
});

module.exports = router;
