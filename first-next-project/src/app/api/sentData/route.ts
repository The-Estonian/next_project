import { NextResponse } from 'next/server';
import dataEntry from '../../../database/dataEntry';

export async function POST(request: Request) {
  try {
    const { name, age } = await request.json();

    if (!name || !age) {
      return new NextResponse(
        JSON.stringify({ error: 'Name and Age are required' }),
        { status: 400 }
      );
    }

    dataEntry(name, age);

    return new NextResponse(
      JSON.stringify({
        message: 'Data inserted successfully',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (e) {
    console.log(e);

    return new NextResponse(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
