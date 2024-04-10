import ContactSection from "@/components/ContactForm/Form2";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/navbar";
import GoogleMaps from "@/components/ui/map";
import GTM from "@/utils/GTM";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <head>
        <GTM gtmId="GTM-MDF4W4JT" />

        <title>Dr. Dubay</title>
        <meta
          name="description"
          content="Dr. Dheeraj Dubay, Joint and Hip Replacement Surgeon in Rajasthan"
        />

        {/* Favicon for branding */}
        <link rel="icon" href="/assets/images/logonew.png" />
      </head>
      <Navbar />
      <ContactSection />
      <GoogleMaps />
      <Footer />
    </>
  );
};

export default page;
