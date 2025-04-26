import { NextResponse } from 'next/server';
import db from '@/lib/knex.node';

export async function GET() {
    try {
        const users = await db('users').select('*');
        return NextResponse.json(users);
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:"Error connecting to the postgres"});
    }
}

export async function POST(request: Request) {
    const body = await request.json();
    try {
        await db("users").insert({
            username: body.username,
            firstname: body.firstName,
            lastname: body.lastName
        })
        return NextResponse.json("User registered!");
    } catch (e) {
        console.log(e);
        
    }
}

