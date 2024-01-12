import Footer from "@/components/Footer/Footer";
import Gallery1 from "@/components/Gallery/Gallery1";
import Gallery from "@/components/Gallery4/NewGallery";
import Navbar from "@/components/Navbar/navbar";
import { db } from "@/lib/db";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const newimages = await db.image.findMany({});

  return (
    <div>
      <Navbar />
      <Gallery images={newimages} />
      <Footer />
    </div>
  );
};

export default page;
