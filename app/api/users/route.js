import { NextRequest, NextResponse } from "next/server";


export function GET( NextRequest ) {
    return NextResponse.json([
        {id: 1, name: 'yared'},
        {id: 2, name: 'samuel'},
    ])
}