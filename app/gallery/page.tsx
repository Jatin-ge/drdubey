import Footer from "@/components/Footer/Footer";
import Gallery1 from "@/components/Gallery/Gallery1";
import Gallery from "@/components/Gallery4/NewGallery";
import Navbar from "@/components/Navbar/navbar";
import { db } from "@/lib/db";
import React from "react";

type Props = {};

const images = [
  "/assets/images/one.JPG",
  "/assets/images/dubay/img1.webp",
  "/assets/images/main.JPG",
  "/assets/images/two.JPG",
  "/assets/images/dubay/p3.jpg",
  "/assets/images/dubay/p4.webp",
  "/assets/images/three.JPG",
  "/assets/images/four.JPG",
  "/assets/images/dubay/g14.jpg",
  "/assets/images/dubay/img2.jpg",
  "/assets/images/dubay/img5.webp",
  "/assets/images/dubay/img7.jpg",
  "/assets/images/dubay/img4.webp",
  "/assets/images/dubay/img8.jpg",
  "/assets/images/dubay/p5.webp",
];

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Gallery images={newimages} />
      <Footer />
    </div>
  );
};

export default page;
