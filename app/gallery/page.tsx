import Footer from "@/components/Footer/Footer";

import Gallery4 from "@/components/Gallery4/Gallery4";
import Navbar from "@/components/Navbar/navbar";
import { db } from "@/lib/db";
import React from "react";


const page = async() => {
  const images = await db.image.findMany()
  return (
    <div>
      <Navbar />
      <Gallery4 images={images} />
      <Footer />
    </div>
  );
};

export default page;
