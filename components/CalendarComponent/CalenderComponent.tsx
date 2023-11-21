"use client";
import React, { useState } from "react";
import { Day } from "@prisma/client";
import ModalCalendar from "../Calendar/ModalCalendar";

interface HomeProps {
  days: Day[];
  closedDays: string[];
}

const CalenderComponent = ({ days, closedDays }: HomeProps) => {
  const [isModalOpen, setIsModalOpen] = useState(true); // State to manage modal open/close
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ModalCalendar
        days={days}
        closedDays={closedDays}
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
      />
    </div>
  );
};

export default CalenderComponent;
