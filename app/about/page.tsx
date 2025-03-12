import Section1 from "@/components/AboutUs/Section1";
import Section2 from "@/components/AboutUs/Section2";
import Footer from "@/components/Footer/Footer";

import Gallery from "@/components/Gallery4/NewGallery";
import { db } from "@/lib/db";
import GTM from "@/utils/GTM";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const newimages = await db.image.findMany({
   
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
      <Section2 />
      <Section1 />
      <div className="py-12">
        <Gallery images={newimages} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
