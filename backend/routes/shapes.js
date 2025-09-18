const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../../knexfile").development);

router.get("/", async (req, res) => {
  try {
    const shapes = await knex("Shapes")
      .select("id", "Name", "Price", "Rarity");
    res.json(shapes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;