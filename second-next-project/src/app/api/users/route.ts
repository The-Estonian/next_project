import { NextResponse } from 'next/server';
let index = 1
const tempData: UserStruct[] = [
    // {
    //     id: 1,
    //     username: "Bobberino",
    //     firstName: "Bob",
    //     lastName: "Marley"
    // },
    // { 
    //     id: 2,
    //     username: "Markerino",
    //     firstName: "Mark",
    //     lastName: "Zuk"
    // }
]

export async function GET() {
    return NextResponse.json(tempData);
}

export async function POST(request: Request) {
    const body = await request.json();
    tempData.push(
        { 
            id: index,
            username: body.username,
            firstName: body.firstName,
            lastName: body.lastName
        })
    index++
    return NextResponse.json("User registered!");
}


type UserStruct = {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
};