import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Create the users table if it doesn't exist
export const initializeDatabase = () => {
  db.serialize(() => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER NOT NULL
      )
    `,
      (err) => {
        if (err) {
          console.error('Error creating table', err);
        } else {
          console.log('Users table is ready');
        }
      }
    );
  });
};

export default db;
