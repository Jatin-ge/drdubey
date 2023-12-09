"use client";
import React from "react";
import Calendar from "@/components/Calendar/Calendar";
import { Day } from "@prisma/client";
import { useRouter } from "next/navigation";

interface HomeProps {
  days: Day[];
  closedDays: { id: string; date: Date }[];
}

export const Booking = ({ days, closedDays }: HomeProps) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 font-bold min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl text-white font-bold text-center mb-10">
          Book your Appointment
        </h1>
        <div className="mx-auto ">
          <Calendar days={days} closedDays={closedDays} />
        </div>
      </div>
    </div>
  );
};
