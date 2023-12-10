import React from "react";
import Calendar from "@/components/Calendar/Calendar";
import { Day } from "@prisma/client";
import { useRouter } from "next/navigation";
import { db } from "@/lib/db";

interface HomeProps {
  days: any;
  closedDays: { id: string; date: Date }[];
  city: string;
}


export const Booking = async({ days, closedDays, city }: HomeProps) => {

  const appoinmentCity = await db.cities.findUnique({
    where: {
      name: city,
    },
    include: {
      appointments: true,
    },
  })
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 font-bold min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl text-white font-bold text-center mb-10">
          Book your Appointment
        </h1>
        <div className="mx-auto ">
          <Calendar days={days} closedDays={closedDays} appointments={appoinmentCity?.appointments} city={city} />
        </div>
      </div>
    </div>
  );
};
