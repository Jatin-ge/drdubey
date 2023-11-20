"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { benefitOne, benefitTwo } from "../components/Benifits/data";

import { Benefits } from "@/components/Benifits/Benifits";

import Hero from "@/components/Hero/Hero";
import Hero2 from "@/components/Hero2/Hero2";
import Features from "@/components/Features/Features";
import { Stats } from "@/components/Stats/Stats";
import Banner from "@/components/Banner/Banner";
import { Testimonial } from "@/components/Testimonials/Testimonial";

import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "@/components/HorizontalGallery/Gallery";
import Carousel from "@/components/Carousel/Carousel";
import Services from "@/components/Services/Services";
import Navbar from "@/components/NewNav/Navbar";
import Hero3 from "@/components/NewNav/Hero";
import Form from "@/components/ContactForm/Form";
import Card1 from "@/components/ProfileCard/Card1";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import ReviewCard from "@/components/Carousel/ReviewCard";
import Booknow from "@/components/Booknow/Booknow";
import Footer from "@/components/Footer/Footer";
import Calendar from "@/components/Calendar/Calendar";

export default function CardWithForm() {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <Navbar />

      <Hero3
        heading={"Dr. Dheeraj Dubay's Exceptional Joint Replacement Surgery! "}
        message={
          "Step into a Pain-Free Tomorrow: 15 Years of Mastery, 18,000 Smiles Created: Dr. Dheeraj Dubay's Journey in Joint Replacement Excellence "
        }
      />
      {/* <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Ayush</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card> */}

      {/* <Hero /> */}
      <Card1 />
      <Stats />

      {/* <Benefits data={benefitOne} /> */}

      <Hero2 />

      {/* <Features /> */}
      <Services />

      <WhyChoose />

      <Booknow />

      <Form />

      <Banner />

      <Testimonial />

      {/* <Gallery /> */}

      {/* <Carousel /> */}

      <Footer />
    </div>
  );
}
