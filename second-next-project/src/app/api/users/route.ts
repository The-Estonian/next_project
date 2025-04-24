import { NextResponse } from 'next/server';
import db from '@/lib/knex.node';

// let index = 1
// const tempData: UserStruct[] = [
//     {
//         id: 1,
//         username: "Bobberino",
//         firstName: "Bob",
//         lastName: "Marley"
//     },
//     { 
//         id: 2,
//         username: "Markerino",
//         firstName: "Mark",
//         lastName: "Zuk"
//     }
// ]

export async function GET() {
    try {
        const users = await db('users').select('*');
        return NextResponse.json(users);
    } catch (error) {
        console.log(error);
        
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


// type UserStruct = {
//     id: number;
//     username: string;
//     firstName: string;
//     lastName: string;
// };