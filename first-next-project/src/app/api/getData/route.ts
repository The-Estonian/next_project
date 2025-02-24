import dataFetch from '../../../database/dataFetch';
import { NextResponse } from 'next/server';

export async function GET() {
  const dataStream = await dataFetch();
  
  return new NextResponse(
    JSON.stringify({
      dataStream: dataStream,
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
