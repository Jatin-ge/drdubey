import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const services = await db.services.findMany();
    console.log("services  inthe apis are " , services);
    
    return NextResponse.json(services);
  } catch (error) {
    console.error("[SERVICES_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}