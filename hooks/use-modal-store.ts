
import {create} from "zustand"
import { SexType, patients } from "@prisma/client";


export type ModalType = "createPatient"

interface ModalData{
    patients?: patients
    sexType?: SexType
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