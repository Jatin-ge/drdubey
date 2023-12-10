import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
)

{  
  try{ 

    const values = await req.json();
    console.log("values", values)

    const video  = await db.youTube.create({
      data:{
        link: values.link
      }
})
      
      return NextResponse.json(video);
  } catch (error) {
    console.log("[VIDEO_CREATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
