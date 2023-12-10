import Section1 from "@/components/AboutUs/Section1";
import Section2 from "@/components/AboutUs/Section2";
import Footer from "@/components/Footer/Footer";
import Gallery1 from "@/components/Gallery/Gallery1";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Section2 />
      <Section1 />
      <Gallery1 />

      <Footer />
    </div>
  );
};

export default page;
