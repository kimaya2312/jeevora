import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "jeevora.db");

let db;

export function getDb() {
  if (!db) {
    const { mkdirSync } = require("fs");
    mkdirSync(path.join(process.cwd(), "data"), { recursive: true });
    db = new Database(DB_PATH);
    db.exec(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id        INTEGER PRIMARY KEY AUTOINCREMENT,
        name      TEXT    NOT NULL,
        email     TEXT    NOT NULL UNIQUE,
        message   TEXT,
        joined_at TEXT    NOT NULL DEFAULT (datetime('now'))
      );
    `);
    // Migrate: add message column to existing DBs that don't have it yet
    const cols = db.pragma("table_info(waitlist)").map((c) => c.name);
    if (!cols.includes("message")) {
      db.exec("ALTER TABLE waitlist ADD COLUMN message TEXT;");
    }
  }
  return db;
}

export function addToWaitlist(name, email, message = null) {
  const db = getDb();
  const stmt = db.prepare(
    "INSERT INTO waitlist (name, email, message) VALUES (?, ?, ?)"
  );
  return stmt.run(name, email, message || null);
}

export function emailExists(email) {
  const db = getDb();
  const row = db
    .prepare("SELECT id FROM waitlist WHERE email = ?")
    .get(email);
  return !!row;
}
