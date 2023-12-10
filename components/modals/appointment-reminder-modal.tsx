"use client";

import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import toast from "react-hot-toast";




export const SendAppointmentReminder = () => {
  
  const { isOpen, onClose, type, data } = useModal();



  const header = {
   headers:{
    Authorization: process.env.NEXT_PUBLIC_WHATSAPP_TOKEN,
    Accept: "application/json"
    
   } 
  }

  const isModalOpen = isOpen && type === "sendAppointmentReminder";

    

  const onSubmit = async () => {
  try {
      for (const row of data.template) {
      const body = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: row.original?.phone,
        type: "template",
        template: {
          name: "booking_confirmation",
          language: {
            code: "en_US"
          },
          components: [
            {
                type: "body",
                parameters: [
                {
                    type: "text",
                    text: row.original?.name
                },
                {
                    type: "text",
                    text: row.original?.date
                },
                {
                    type: "text",
                    text: row.original?.time
                },

                
                    
                ]
        
            }
    ]
    }}

      
      await axios.post("https://graph.facebook.com/v17.0/177309328798172/messages", body, header);
      toast.success("Messages sent successfully")
      handleClose();
      
      
    }
}
 catch (error) {
    console.log(error);
  }
 
};
  

  const handleClose = () => {
    onClose();
  }

  

  return (
    
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
           
                    <DialogTitle className="text-3xl text-center font-bold m-4">
                        Send Appointment Reminder to {data.template?.length} clients
                    </DialogTitle>
            
          
        </DialogHeader>
        <DialogFooter className="bg-gray-100 px-6 py-4 flex text-center">
              <Button variant="primary" onClick={onSubmit}>
                Send
              </Button>
              {/* <Button variant="destructive" onClick={handleClose} disabled={isLoading} className="text-center text-xl">
                Close
              </Button> */}
            </DialogFooter>
         
       
      </DialogContent>
    </Dialog>

    
  )
}
