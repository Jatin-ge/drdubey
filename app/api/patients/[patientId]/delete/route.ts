import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function DELETE(
    req: Request,
    {params}: {params: {leadId: string}}
){
    try{
        const profile = await currentProfile();

        if(!profile){
            return new NextResponse("Unauthorized", {status: 401})
        }
        
        if(!params.leadId){
            return new NextResponse("lead Id missing", {status: 400})
        }

        const lead = await db.lead.delete({
            where:{
                id: params.leadId,
                profileId: profile.id,
            },
        })

        return NextResponse.json(lead);
    }
    catch(err){
        console.log("LEAVE_lead_PATCH", err);
        return new NextResponse("Internal lead error", {status: 500})
    }
}