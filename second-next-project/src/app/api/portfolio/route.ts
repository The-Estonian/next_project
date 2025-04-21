import { NextResponse } from 'next/server';

export async function GET() {
    const response = await fetch("https://picsum.photos/v2/list?page=1&limit=9")
    const data = await response.json()

    return NextResponse.json(data);
}