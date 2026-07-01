const db = require("../config/db");

// =======================
// Save / Update Link
// =======================

exports.saveLink = (req, res) => {

  const { district, tehsil, village, link } = req.body;

  if (!district || !tehsil || !village || !link) {
    return res.status(400).json({
      success: false,
      message: "All fields are required."
    });
  }

  db.run(
    `
    INSERT INTO village_links
    (district, tehsil, village, google_map_link)

    VALUES (?, ?, ?, ?)

    ON CONFLICT(village)

    DO UPDATE SET
      district = excluded.district,
      tehsil = excluded.tehsil,
      google_map_link = excluded.google_map_link,
      updated_at = CURRENT_TIMESTAMP
    `,
    [district, tehsil, village, link],
    function (err) {

      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false,
          message: err.message
        });
      }

      res.json({
        success: true,
        message: "Link Saved Successfully"
      });

    }
  );

};

// =======================
// Get Single Village Link
// =======================

exports.getLink = (req, res) => {

  const { village } = req.query;

  db.get(
    `
    SELECT google_map_link
    FROM village_links
    WHERE village = ?
    `,
    [village],
    (err, row) => {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message
        });
      }

      if (!row) {
        return res.json({
          success: true,
          google_map_link: ""
        });
      }

      res.json({
        success: true,
        google_map_link: row.google_map_link
      });

    }
  );

};

// =======================
// Get Villages by District & Tehsil
// =======================

exports.getVillages = (req, res) => {

  const { district, tehsil } = req.query;

  if (!district || !tehsil) {
    return res.status(400).json({
      success: false,
      message: "District and Tehsil are required."
    });
  }

  db.all(
    `
    SELECT
      district,
      tehsil,
      village,
      google_map_link
    FROM village_links
    WHERE district = ?
      AND tehsil = ?
    ORDER BY village
    `,
    [district, tehsil],
    (err, rows) => {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message
        });
      }

      res.json({
        success: true,
        villages: rows
      });

    }
  );

};