const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all districts
router.get("/", (req, res) => {
  db.all(
    "SELECT name FROM districts ORDER BY name",
    [],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    }
  );
});

// Add district
router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "District name is required"
    });
  }

  db.run(
    "INSERT INTO districts(name) VALUES(?)",
    [name],
    function (err) {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "District Added Successfully"
      });
    }
  );
});

module.exports = router;