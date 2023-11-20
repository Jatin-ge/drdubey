/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { now } from "@/components/Calendar/Constants/config";
import { parseISO } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();

  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formattedDate, setformattedDate] = useState<string | null>(null);

  useEffect(() => {
    const selectedTime = localStorage.getItem("selectedTime");
    if (!selectedTime) router.push("/");
    else {
      const date = parseISO(selectedTime);
      if (date < now) router.push("/");

      // Date is valid
      setSelectedTime(selectedTime);
      setformattedDate(localStorage.getItem("selectedDate"));
    }
  }, [router]);
  return (
    <div>
      <div>
        this is the menu page {selectedTime} and the Date is {formattedDate}{" "}
      </div>
    </div>
  );
};

export default page;
