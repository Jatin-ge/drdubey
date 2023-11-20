
import {create} from "zustand"
import { Lead } from "@prisma/client";
import { LeadCloumn } from "@/app/admin/patients/components/column";


export type ModalType = "createPatient" | "sendMessage"

interface ModalData{
    lead?: Lead
    recipent?: LeadCloumn
    apiUrl?: string
    query?: Record<string, any>
}

interface ModalStrore{
    type: ModalType | null
    isOpen:  boolean
    data: ModalData
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStrore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({isOpen: true, type, data}),
    onClose: () => set({type: null, isOpen: false})
}))