import { currentProfile } from "@/lib/current-profile";

import { db } from "@/lib/db";
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from "next/server";


export async function PATCH  (
    req:Request,
    {params}: {params: {leadId: string}}
) {
    try{
        const profile = await currentProfile();

        const {name, email, phone, sex, address, status , remark, age } = await req.json();

        if(!profile){
            return new NextResponse("Unauthorizes" , {status: 401})
        }

        const lead = await db.lead.update({
            where: {
                id: params.leadId,
                profileId: profile.id
            },
            data:{
                name, email, phone, sex, address, status , remark, age 
            }
    })

    return NextResponse.json(lead);

    }
    catch(err){
        console.log("lead ID PATCH",err);
        return new NextResponse("Internal error", {status: 500})
    }

}