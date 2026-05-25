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
      joined_at TEXT    NOT NULL DEFAULT (datetime('now'))
    );
  `);
  // Migration: add message column if it was created without it
  try {
    await db.execute(`ALTER TABLE waitlist ADD COLUMN message TEXT;`);
  } catch {
    // Column already exists — safe to ignore
  }
}

export async function addToWaitlist(name, email, message = null) {
  const db = getClient();
  await initDb(); // ensure table exists
  await db.execute({
    sql: "INSERT INTO waitlist (name, email, message) VALUES (?, ?, ?)",
    args: [name, email, message ?? null],
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
    "SELECT id, name, email, message, joined_at FROM waitlist ORDER BY id DESC"
  );
  return result.rows;
}
