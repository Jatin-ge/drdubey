"use client";

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Calendar from "@/components/Calendar/Calendar";

import { Day } from "@prisma/client";

interface ModalCalendarProps {
  days: Day[];
  closedDays: string[];
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalCalendar: React.FC<ModalCalendarProps> = ({
  days,
  closedDays,
  isOpen,
  onRequestClose,
}) => {
  // You can customize modal styles as needed

  // const [isOpen, setIsOpen] = useState(true);
  // const [onRequestClose, setOnRequestClose] = useState();

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      padding: 0,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Calendar Modal"
    >
      <button onClick={onRequestClose}>Close</button>
      <Calendar days={days} closedDays={closedDays} />
    </Modal>
  );
};

export default ModalCalendar;
