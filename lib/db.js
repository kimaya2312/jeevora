import { createClient } from "@libsql/client";

function getClient() {
  // Local dev: uses a local file DB (no env vars needed)
  // Production (Vercel): uses Turso cloud via env vars
  const url = process.env.TURSO_DATABASE_URL ?? "file:./data/jeevora.db";
  const authToken = process.env.TURSO_AUTH_TOKEN;

  return createClient({ url, authToken });
}

export async function initDb() {
  const db = getClient();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id        INTEGER PRIMARY KEY AUTOINCREMENT,
      name      TEXT    NOT NULL,
      email     TEXT    NOT NULL UNIQUE,
      message   TEXT,
      feature   TEXT,
      source    TEXT,
      joined_at TEXT    NOT NULL DEFAULT (datetime('now'))
    );
  `);
  // Migrations: add columns if table was created without them
  const migrations = [
    `ALTER TABLE waitlist ADD COLUMN message TEXT;`,
    `ALTER TABLE waitlist ADD COLUMN feature TEXT;`,
    `ALTER TABLE waitlist ADD COLUMN source  TEXT;`,
  ];
  for (const sql of migrations) {
    try { await db.execute(sql); } catch { /* column already exists */ }
  }
}

export async function addToWaitlist(name, email, message = null, feature = null, source = null) {
  const db = getClient();
  await initDb();
  await db.execute({
    sql: "INSERT INTO waitlist (name, email, message, feature, source) VALUES (?, ?, ?, ?, ?)",
    args: [name, email, message ?? null, feature ?? null, source ?? null],
  });
}

export async function emailExists(email) {
  const db = getClient();
  await initDb(); // ensure table exists
  const result = await db.execute({
    sql: "SELECT id FROM waitlist WHERE email = ?",
    args: [email],
  });
  return result.rows.length > 0;
}

export async function getAllEntries() {
  const db = getClient();
  await initDb(); // ensure table exists
  const result = await db.execute(
    "SELECT id, name, email, message, feature, source, joined_at FROM waitlist ORDER BY id DESC"
  );
  return result.rows;
}
