import { NextResponse } from 'next/server';

export async function GET() {
    const portfolioItems = [
        { id: 1, title: 'Project One' },
        { id: 2, title: 'Project Two' },
    ];

    return NextResponse.json(portfolioItems);
}