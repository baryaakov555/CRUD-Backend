const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../database");

router.get("/", async (req, res) => {
  try {
    const campuses = await Campus.findAll({ include: Student });
    res.json(campuses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const camputInput = req.body;
    const newCampuse = await Campus.create(camputInput);
    res.json(newCampuse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
