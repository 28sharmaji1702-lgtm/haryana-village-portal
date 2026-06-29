const db = require("../config/db");

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
    (district,tehsil,village,google_map_link)
    VALUES(?,?,?,?)

    ON CONFLICT(village)

    DO UPDATE SET

    district=excluded.district,
    tehsil=excluded.tehsil,
    google_map_link=excluded.google_map_link,
    updated_at=CURRENT_TIMESTAMP
    `,

    [district, tehsil, village, link],

    function (err) {

      if (err) {

        console.log(err);

        return res.status(500).json({
          success: false
        });

      }

      res.json({

        success: true,

        message: "Link Saved Successfully"

      });

    }

  );

};

exports.getLink = (req, res) => {

  const { village } = req.query;

  db.get(

    `
    SELECT google_map_link
    FROM village_links
    WHERE village=?
    `,

    [village],

    (err, row) => {

      if (err) {

        return res.status(500).json(err);

      }

      if (!row) {

        return res.json({

          google_map_link: ""

        });

      }

      res.json(row);

    }

  );

};