import { DatabaseSync } from "node:sqlite";

export const initDb = (path: string): DatabaseSync => {
  const db = new DatabaseSync(path);

  const query = `
    CREATE TABLE IF NOT EXISTS expense(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL,
       amount REAL NOT NULL,
       date TEXT NOT NULL
    )
  `;

  db.exec(query);

  return db;
};
