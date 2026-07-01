const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db", (err) => {

  if (err) {

    console.error("Database Error:", err.message);

    return;

  }

  console.log("✅ SQLite Connected");

  db.serialize(() => {

    db.run(`
      CREATE TABLE IF NOT EXISTS village_links (
        district TEXT NOT NULL,
        tehsil TEXT NOT NULL,
        village TEXT PRIMARY KEY,
        google_map_link TEXT DEFAULT '',
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    db.run(`
      CREATE INDEX IF NOT EXISTS idx_district
      ON village_links(district)
    `);

    db.run(`
      CREATE INDEX IF NOT EXISTS idx_tehsil
      ON village_links(tehsil)
    `);

    console.log("✅ village_links table ready");

  });

});

module.exports = db;