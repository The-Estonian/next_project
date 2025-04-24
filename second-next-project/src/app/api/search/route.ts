import { NextResponse } from 'next/server';
import db from '@/lib/knex.node';

export async function POST(request: Request) {
    const body = await request.json();
    try {
        const users = await db('users').select('*').where('username', 'like', `%${body.searchQuery}%`);
        return NextResponse.json(users);
    } catch (e) {
        console.log(e);
        
    }
}


// type UserStruct = {
//     id: number;
//     username: string;
//     firstName: string;
//     lastName: string;
// };