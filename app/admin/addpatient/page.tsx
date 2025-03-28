// @ts-nocheck

"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Appointment, GenderType, Side, TPA } from "@prisma/client";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect, useParams, useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { ScrollArea } from "@/components//ui/scroll-area";
import { Lead } from "@prisma/client";
import { type } from "os";

interface AddpatientProps {
  initialData: Lead | Appointment | null;
  type: "lead" | "appointment";
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Patient name is required.",
  }),
  email: z.string(),
  phone:
    z.string().min(1, {
      message: "phone is required",
    }) || null,
  age: z.number().lte(150).positive(),
  gender: z.nativeEnum(GenderType),
  address: z.string().min(1, {
    message: "address is required.",
  }),
  remark: z.string(),
  doad: z.string().transform((str) => new Date(str)),
  dood: z.string().transform((str) => new Date(str)),
  patientStatus: z.string(),
  side: z.string(),
  implant: z.string(),
  ipdReg : z.number(),
  bill: z.number(),
  surgery: z.string().min(1, {
    message: "Selef Operation Information",
  }),
  tpa: z.nativeEnum(TPA),
  dx: z.string(),
  cities : z.string()
});

type AddpatientFormValues = z.infer<typeof formSchema>;

const Addpatient: React.FC<AddpatientProps> = ({ initialData, type }) => {
  const implants = ["J&J","Maxx","Zimmer","Stryker","S&N"]

  const OpInfo = ["Total Knee Replacement","Total Hip Replacement","Revision Knee Surgery","Revision Hip Surgery","Tuksplasty (Partial Knee)"]

  const PatientStatus = ["OPD","IPD","Conservative","Trauma","Arthoplasty"] 
  const router = useRouter();

  const [isloading, setLoading] = useState(false);

  const toastMessage = initialData ? "Patient updated." : "Patient created.";

  const cities = ["Agra", "Alwar", "Bahror", "Beawar", "Bhartapur", "Bikaner", "Churu", "Dausa", "Fatehpur", "Gangapur", "Jhujhunu", "Kishangarh", "Kota", "Mathura", "Merta City", "Nagaur", "Narnaul", "Neem ka thana", "Pali", "Saradarshahar", "Sikar"];

  const form = useForm<AddpatientFormValues>({
    resolver: zodResolver(formSchema),
    // @ts-ignore
    defaultValues: initialData || {
      name: "",
      email: "",
      phone: "",
      age: z.EMPTY_PATH,
      gender: GenderType.Male,
      address: "",
      remark: "",
      doad: new Date().toISOString().split("T")[0],
      dood: new Date().toISOString().split("T")[0],
      patientStatus: "",
      side: "",
      implant: "",
      ipdReg : z.number(),
      bill: z.number(),
      dx: "",
      surgery: "",
      tpa: "",
      cities: ""
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
    try {
      setLoading(true);
      if (type === "lead") {  
        await axios.patch(`/api/patients/${initialData.id}`, values);
        toast.success("Patient Updated Successfully");
      } 
      else {
        await axios.post(`/api/patients`, values);   
        toast.success("Patient Added Successfully");    
      }
      form.reset();
      
      router.push(`/admin/patients`);
    }  catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    
  };

  useEffect(() => {
    if(initialData?.doad){
      form.setValue("doad", format(new Date(initialData.doad), "yyyy-MM-dd"));
    }
  }, [form, initialData?.doad]);

  useEffect(() => {
    if(initialData?.dood){
      form.setValue("dood", format(new Date(initialData.dood), "yyyy-MM-dd"));
    }
  }
  , [form, initialData?.dood]);



  return (
    <div>
      <h2 className="text-3xl font-bold mb-5 m-10">Add New Patient</h2>
        <ScrollArea className="container mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-8 px-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    Patient name
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-transparent border border-primary focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                      placeholder="Enter Patient name"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    Enter email
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-transparent border border-primary focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                      placeholder="Enter email"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    Phone number
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-transparent border border-primary focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                      placeholder="Enter Phone number"
                      {...field}
                      type="phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    Age
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-transparent border border-primary focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                      placeholder="Enter Patient's age"
                      {...field}
                      {...form.register("age", { valueAsNumber: true })}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    Gender
                  </FormLabel>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-transparent border border-primary focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none dark:text-white">
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(GenderType).map((type) => (
                        <SelectItem
                          key={type}
                          value={type}
                          className="capitalize"
                        >
                          {type.toLowerCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-transparent border border-primary focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                      placeholder="Enter Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="cities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    City
                  </FormLabel>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-transparent border border-primary focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none dark:text-white">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                    </FormControl>
                   
                    <SelectContent className="relative overflow-y-scroll h-full">
                      {Object.values(cities).map((type) => (
                        
                        <SelectItem
                          key={type}
                          value={type}
                          className="capitalize"
                        >
                          {type.toLowerCase()}
                        </SelectItem>
                        
                      ))}
                    </SelectContent>
                  
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="doad"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    Date of Admission
                  </FormLabel>
                  
                  <FormControl> 
                    < Input           
                      disabled={isLoading}
                      className="bg-transparent border border-primary focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                      placeholder="Enter D.O.Ad"
                      type="date"
                      {...field}
                      
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dood"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    Date of Operation
                  </FormLabel>
                  
                  <FormControl>
                    
                    <Input                  
                      disabled={isLoading}
                      className="bg-transparent border border-primary focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                      placeholder="Enter D.O.Op"
                      {...field}
                      type="date"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surgery"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    Surgery
                  </FormLabel>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-transparent border border-primary focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none dark:text-white">
                        <SelectValue placeholder="Select Surgery" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(OpInfo).map((type) => (
                        <SelectItem
                          key={type}
                          value={type}
                          className="capitalize"
                        >
                          {type.toLowerCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
           
            <FormField
              control={form.control}
              name="remark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    remarks
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-transparent border border-primary focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                      placeholder="Enter Remarks"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dx"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    Description
                  </FormLabel>
                   <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-transparent border border-primary focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                      placeholder="Enter Description"
                      {...field}
                    />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />

             <FormField
              control={form.control}
              name="patientStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    Patient Status
                  </FormLabel>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-transparent border border-primary focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none dark:text-white">
                        <SelectValue placeholder="Select patient Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(PatientStatus).map((type) => (
                        <SelectItem
                          key={type}
                          value={type}
                          className="capitalize"
                        >
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
             <FormField
              control={form.control}
              name="side"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    side
                  </FormLabel>
                 <FormControl>
                   <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-transparent border border-primary focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none dark:text-white">
                        <SelectValue placeholder="Select side" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(Side).map((type) => (
                        <SelectItem
                          key={type}
                          value={type}
                          className="capitalize"
                        >
                          {type.toLowerCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
                         <FormField
              control={form.control}
              name="implant"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    implant
                  </FormLabel>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-transparent border border-primary focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none dark:text-white">
                        <SelectValue placeholder="Select Implant" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(implants).map((type) => (
                        <SelectItem
                          key={type}
                          value={type}
                          className="capitalize"
                        >
                          {type.toLowerCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="tpa"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    TPA
                  </FormLabel>
                 <FormControl>
                   <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-transparent border border-primary focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none dark:text-white">
                        <SelectValue placeholder="Select TPA" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(TPA).map((type) => (
                        <SelectItem
                          key={type}
                          value={type}
                          className="capitalize"
                        >
                          {type.toLowerCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
               <FormField
              control={form.control}
              name="ipdReg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    ipd reg
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-transparent border border-primary focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                      placeholder="Enter IPD Reg Number"
                      {...field}
                      {...form.register("ipdReg", { valueAsNumber: true })}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
               <FormField
              control={form.control}
              name="bill"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    bill
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="bg-transparent border border-primary focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:text-white"
                      placeholder="Enter Bill amount"
                      {...field}
                      {...form.register("bill", { valueAsNumber: true })}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />                      
          </div>

          <DialogFooter className=" px-6 py-4">
            <Button variant="primary" disabled={isLoading}>
              {
                type === "lead" ? "Update" : "Add Lead"
              }
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </ScrollArea>
    </div>
    
  );
};

export default Addpatient;