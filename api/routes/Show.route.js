const express = require("express");
const router = express.Router();
const Show = require("../../models/Show");

router.get("/", async (req, res) => {
  try {
    const shows = await Show.findAll();
    res.status(200).json(shows);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const show = await Show.findAll({
      where: { id },
    });
    res.status(200).json(show);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  const { title, show_date, localisation } = req.body;
  try {
    const show = await Show.create({
      title,
      show_date,
      localisation,
    });
    res.status(201).json(show);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { title, show_date, localisation } = req.body;
  const { id } = req.params;
  try {
    const show = await Show.update(
      {
        title,
        show_date,
        localisation,
      },
      { where: { id } }
    );
    res.status(202).json(show);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Show.destroy({
      where: { id },
    });
    res.status(205).send("Show deleted");
  } catch (err) {
    res.status(422).json(err);
  }
});

module.exports = router;
