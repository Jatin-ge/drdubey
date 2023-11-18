"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GenderType, LeadStatus } from "@prisma/client";
import {format} from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ScrollArea } from "../ui/scroll-area";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  message: z.string(),
  
});


export const SendMessageModal = () => {
  const numbers = ["+916399471961", "+919759815378", "9719616460", "9528118977"]
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const params = useParams();

  const header = {
   "headers":{
    Authorization: "Bearer EAAEf4LMZAyZA8BO4tHBZBePIoauTjxZAvBkZAZAEzxZBsNg3Xbq0JTcLvZAk21X74bp0izDHpZBL5RposTMqbZBGlMO8tqbWSZAKrZBci8JE1TfxVlcZBZADN9WNcPVpgRHIYqRvYNqBfbTiSSCLeg1ZAfhkIq356wYH35SmpXbPOpo0sFchjoVyZA4MOcReSHHc17HiZAjrEOhAZCWUKJZAv6RiSNQ2scZD",
    Accept: "application/json"
    
   } 
  }

  const isModalOpen = isOpen && type === "sendMessage";
  const form = useForm({
    resolver: zodResolver(formSchema),
    // @ts-ignore
    defaultValues: {
      message: ""
    }
  });

  

  const isLoading = form.formState.isSubmitting;
  

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    for (const number of numbers) {
      const body = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "template",
        template: {
          name: "hello_world",
          language: {
            code: "en_US"
          },
        }
      };

      await axios.post("https://graph.facebook.com/v17.0/177309328798172/messages", body, header);
    }

    form.reset();
    onClose();
  } catch (error) {
    console.log(error);
  }
};
  

  const handleClose = () => {
    form.reset();
    onClose();
  }

  return (
    
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Send Message to {data.recipent?.name}
          </DialogTitle>
          <DialogTitle className="text-2xl text-center font-bold">
            Sender phone number is {data.recipent?.phone}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
                    >
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button variant="primary" disabled={isLoading}>
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>

    
  )
}
