import Footer from "@/components/Footer/Footer";

import Gallery from "@/components/Gallery4/NewGallery";
import Navbar from "@/components/Navbar/navbar";
import { db } from "@/lib/db";
import GTM from "@/utils/GTM";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const images = await db.image.findMany();
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
      <Gallery images={images} />
      <Footer />
    </>
  );
};

export default page;
