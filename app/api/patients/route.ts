import { db } from "@/lib/db";
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from "next/server";
import {differenceInYears} from "date-fns"

export async function POST(
    req: Request,
){
    try{

        const {name, email, phone, sex, address, status , remark, age } = await req.json();

        const Lead = await db.lead.create({
            data: {
                name,
                email, 
                phone, 
                gender: sex, 
                address, 
                status, 
                remark ,  
                age
            }
        })

        return NextResponse.json(Lead); 

    
    }
    catch(err){
        console.log("PATIENT_CREATE", err)
        return new NextResponse("Internal server error" , {status: 500})
    }
}

