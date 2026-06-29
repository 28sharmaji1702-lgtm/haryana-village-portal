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

    console.log("✅ village_links table ready");

  });

});

module.exports = db;