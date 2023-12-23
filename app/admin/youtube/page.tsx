"use client";
import React, { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {};

const formSchema = z.object({
  link: z.string().url({
    message: "Invalid URL. Please enter a valid YouTube link.",
  }),
});

type AddYouTubeFormValues = z.infer<typeof formSchema>;

const Page: React.FC<Props> = () => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const form = useForm<AddYouTubeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await axios.post("/api/youtube", values);
      form.reset();
      toast.success("YouTube link added successfully!");
      // Redirect or perform any other action after successful submission
    } catch (error) {
      console.error("Error adding YouTube link:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold mb-5 m-10">Add YouTube Link</h2>
        <div className="container mx-auto">
           <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-8 px-6">
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-bold text-black dark:text-white">
                    Add Youtube video link
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      className="w-full mt-1 p-2 border border-primary focus:outline-none focus:border-secondary dark:text-white dark:bg-gray-800"
                      placeholder="Enter a youtube link"
                      {...field}
                      type="url"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> 
           
          </div>

          
           <Button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-white rounded-md cursor-pointer"
                disabled={isLoading}
              >
                Add Link
              </Button>
              
        
        </form>
      </Form>
      <Button
              variant="outline"
                className="w-80 py-2 px-4 mt-4 bg-rose-500 text-white rounded-md cursor-pointer justify-center"
                disabled={isLoading}
                onClick={() => router.push("/admin/youtube/manage")}
              >
                Manage Videos
      </Button>
        </div>
        
      </div>
      

    </div>
  );
};

export default Page;

// className="w-full mt-1 p-2 border border-primary focus:outline-none focus:border-secondary dark:text-white dark:bg-gray-800"