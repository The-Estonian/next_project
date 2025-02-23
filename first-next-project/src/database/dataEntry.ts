import db from './db';
import { NextResponse } from 'next/server';

const dataEntry = async (name: string, age: string) => {
  const query = 'INSERT INTO users (name, age) VALUES (?, ?)';
  db.run(query, [name, age], function (err) {
    if (err) {
      console.error('Error inserting data', err);
      return new NextResponse(
        JSON.stringify({ error: 'Failed to insert data' }),
        { status: 500 }
      );
    }
    console.log('Entry done!');
  });
};

export default dataEntry;
