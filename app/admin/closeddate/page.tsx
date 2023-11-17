"use client";

import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "../../../components/Calendar/Calendar.css";

type Props = {};

const Page = (props: Props) => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handleDateClick = (date: Date) => {
    // Check if the date is already selected
    const isDateSelected = selectedDates.some(
      (d) => d.toISOString() === date.toISOString()
    );

    if (!isDateSelected) {
      // Update the selectedDates array with the new date
      setSelectedDates([...selectedDates, date]);
    } else {
      // Deselect the date if it's already selected
      const updatedDates = selectedDates.filter(
        (d) => d.toISOString() !== date.toISOString()
      );
      setSelectedDates(updatedDates);
    }
  };

  const isDateDisabled = (date: Date) => {
    // Disable the date if it's already selected
    return selectedDates.some((d) => d.toISOString() === date.toISOString());
  };

  const handleSubmit = async () => {
    try {
      // Assuming your API endpoint is /api/closedDays and using POST method
      const response = await fetch("/api/days/closed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedDates }),
      });

      if (response.ok) {
        console.log("Dates submitted successfully!");
        // Optionally, you can reset the selectedDates array here
        setSelectedDates([]);
      } else {
        console.error("Failed to submit dates");
      }
    } catch (error) {
      console.error("Error submitting dates:", error);
    }
  };

  return (
    <div>
      <div>
        This will contain the admin side calendar for selecting the closed day
      </div>

      <ReactCalendar
        minDate={new Date()}
        className="REACT-CALENDAR p-2 mx-auto "
        view="month"
        onClickDay={handleDateClick}
        tileDisabled={({ date }) => isDateDisabled(date)}
        // value={selectedDates}
      />

      {/* Display selected dates */}
      <div>
        Selected Dates:
        <ul>
          {selectedDates.map((date) => (
            <li key={date.toISOString()}>{date.toISOString()}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Page;
