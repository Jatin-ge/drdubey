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
  closedDays: { id: string; date: Date }[];
}

const AppointmentPage = async () => {
  const profile = await InitialProfile();

  if (!profile) {
    return redirect("/sign-in");
  }
  const days: Day[] = await db.day.findMany();

  const closedDay = await db.closedDay.findMany();

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 font-bold min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl text-white font-bold text-center mb-10">
          Book your Appointment
        </h1>
        <div className="mx-auto ">
          <Calendar days={days} closedDays={closedDay} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
