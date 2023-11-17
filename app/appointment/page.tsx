import Calendar from "@/components/Calendar/Calendar";
import { db } from "@/lib/db";
import React from "react";
import { format, formatISO } from "date-fns";
import { Day } from "@prisma/client";

interface HomeProps {
  days: Day[];
  closedDays: string[];
}

const AppointmentPage = async () => {
  const days: Day[] = await db.day.findMany();

  const closedDays: string[] = (await db.closedDay.findMany()).map((d) =>
    formatISO(d.date)
  );

  return (
    <div>
      <Calendar days={days} closedDays={closedDays} />
    </div>
  );
};

export default AppointmentPage;
