import Calendar from "@/components/Calendar/Calendar";
import { db } from "@/lib/db";
import React from "react";
import { format, formatISO } from "date-fns";
import { Day } from "@prisma/client";
import { currentProfile } from "@/lib/current-profile";
import { currentUser } from "@clerk/nextjs";
import { redirect, useParams } from "next/navigation";
import { InitialProfile } from "@/lib/initial-profile";
import { useRouter } from "next/navigation";
import { Booking } from "@/components/ui/booking";

const AppointmentPage = async ({ params }: { params: { city: string } }) => {
  const profile = await InitialProfile();

  console.log("the city is ", params.city);

  if (!profile) {
    return redirect("/sign-in");
  }
  const days = await db.day.findMany({
    where: {
      cityname: params.city,
    },
  });

  const closedDay = await db.closedDay.findMany({
    where: {
      cityname: params.city,
    },
  });

  return <Booking closedDays={closedDay} days={days} />;
};

export default AppointmentPage;
