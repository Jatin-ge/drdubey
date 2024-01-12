import Section1 from "@/components/AboutUs/Section1";
import Section2 from "@/components/AboutUs/Section2";
import Footer from "@/components/Footer/Footer";

import Gallery from "@/components/Gallery4/NewGallery";
import { db } from "@/lib/db";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const newimages = await db.image.findMany({});
  console.log("the images are ", newimages);
  return (
    <div>
      <Section2 />
      <Section1 />
      <Gallery images={newimages} />

      <Footer />
    </div>
  );
};

export default page;
