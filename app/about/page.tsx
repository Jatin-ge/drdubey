import Section1 from "@/components/AboutUs/Section1";
import Section2 from "@/components/AboutUs/Section2";
import Footer from "@/components/Footer/Footer";
import Gallery1 from "@/components/Gallery/Gallery1";
import Gallery4 from "@/components/Gallery4/Gallery4";
import React from "react";

type Props = {};
const images = [
  "/assets/images/one.JPG",
  "/assets/images/main.JPG",
  "/assets/images/two.JPG",
  "/assets/images/three.JPG",
  "/assets/images/four.JPG",
  "/assets/images/dubay/g14.jpg",
  "/assets/images/dubay/img1.webp",
  "/assets/images/dubay/img2.jpg",
  "/assets/images/dubay/img4.webp",
  "/assets/images/dubay/img5.webp",
  "/assets/images/dubay/img7.jpg",
  "/assets/images/dubay/img8.jpg",
  "/assets/images/dubay/p3.jpg",
  "/assets/images/dubay/p4.webp",
  "/assets/images/dubay/p5.webp",
];

const page = (props: Props) => {
  return (
    <div>
      <Section2 />
      <Section1 />
      <Gallery4 images={images} />

      <Footer />
    </div>
  );
};

export default page;
