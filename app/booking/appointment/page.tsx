import Calendar from "@/components/Calendar/Calendar";
import { db } from "@/lib/db";
import React from "react";
import { format, formatISO } from "date-fns";
import { Day } from "@prisma/client";
import { currentProfile } from "@/lib/current-profile";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { InitialProfile } from "@/lib/initial-profile";

interface HomeProps {
  days: Day[];
  closedDays: string[];
}

const AppointmentPage = async () => {
  const profile = await InitialProfile();

  if (!profile) {
    return redirect("/sign-in");
  }
  const days: Day[] = await db.day.findMany();

  const closedDays: string[] = (await db.closedDay.findMany()).map((d) =>
    formatISO(d.date)
  );

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-20">
        Book your Appointment
      </h1>
      <Calendar days={days} closedDays={closedDays} />
    </div>
  );
};

export default AppointmentPage;
