import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(
    req: Request
){
    try{
        const res = await db.patients.findMany()
        return NextResponse.json(res)
    }
    catch(err){
        console.log(err)
    }
}