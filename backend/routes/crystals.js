const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../../knexfile").development);

router.get("/", async (req, res) => {
  try {
    const crystals = await knex("Crystals")
      .select("CrystalsID as id", "Name", "Price", "Receive", "Bonus", "TotalReceive", "Tier");
    res.json(crystals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;