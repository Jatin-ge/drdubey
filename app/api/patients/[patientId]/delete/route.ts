import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function DELETE(
    req: Request,
    {params}: {params: {leadId: string}}
){
    try{

    
        
        if(!params.leadId){
            return new NextResponse("lead Id missing", {status: 400})
        }

        const lead = await db.lead.delete({
            where:{
                id: params.leadId,
            },
        })

        return NextResponse.json(lead);
    }
    catch(err){
        console.log("LEAVE_lead_PATCH", err);
        return new NextResponse("Internal lead error", {status: 500})
    }
}