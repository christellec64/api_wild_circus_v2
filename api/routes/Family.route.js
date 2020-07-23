const express = require("express");
const router = express.Router();
const Family = require("../../models/Family");

router.get("/", async (req, res) => {
  try {
    const family = await Family.findAll();
    res.status(200).json(family);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const family = await Family.findAll({
      where: { id },
    });
    res.status(200).json(family);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  const { name, age, content, comment } = req.body;
  try {
    const family = await Family.create({
      name,
      age,
      content,
      comment,
    });
    res.status(201).json(family);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { name, age, content, comment } = req.body;
  const { id } = req.params;
  try {
    const family = await Family.update(
      {
        name,
        age,
        content,
        comment,
      },
      { where: { id } }
    );
    res.status(202).json(family);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Family.destroy({
      where: { id },
    });
    res.status(205).send("Family member deleted");
  } catch (err) {
    res.status(422).json(err);
  }
});

module.exports = router;
