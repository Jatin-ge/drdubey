"use client"

import { useEffect, useState } from "react"
import { SendMessageModal } from "../modals/send-message-modal";
import { SendBulkMessageModal } from "../modals/send-bulk-messages";
import { CreateDiscuusionModal } from "../modals/create-discussion";
import { EditDiscussionModal } from "../modals/edit-discussion";
import { SendAppointmentReminder } from "../modals/appointment-reminder-modal";
import { PaymentModal } from "../modals/payment-info-modal";
import { SelectCityModal } from "../modals/select-city";

export const ModalProvider = () => {
    const [isMounted,  setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if(!isMounted){
        return null;
    }
    return(
        <>
            <SendMessageModal/>
            <SendBulkMessageModal/>
            <CreateDiscuusionModal/>
            <EditDiscussionModal/>
            <SendAppointmentReminder/>
            <PaymentModal/>
            <SelectCityModal/>
            
        </>
    )
}