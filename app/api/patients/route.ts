import { db } from "@/lib/db";
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from "next/server";
import {differenceInYears} from "date-fns"

export async function POST(
    req: Request,
){
    try{
        const {name, sex, address, dob} = await req.json();
        const today = new Date()
        const age = today.getFullYear() 
        const patients = await db.patients.create({
            data:{
                    NAME: name,
                    ADDRESS: address,
                    AGE: age,
                    SEX: sex
            },
        })
        return NextResponse.json(patients)
    }
    catch(err){
        console.log("PATIENT_CREATE", err)
        return new NextResponse("Internal server error" , {status: 500})
    }
}