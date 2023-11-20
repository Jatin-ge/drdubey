"use client"

import { useEffect, useState } from "react"
import { CreatePatientModal } from "../modals/create-patient-modal";
import { SendMessageModal } from "../modals/send-message-modal";

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
            <CreatePatientModal/>
            <SendMessageModal/>
            
        </>
    )
}