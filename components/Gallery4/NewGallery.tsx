"use client";
import { GetStaticProps } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ images }: any) => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  console.log(images);

  const slides = images.map((item: any) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  console.log("the slides are ", slides);

  const openLightbox = (index: any) => {
    setOpen(true);
    setImageIndex(index);
  };

  //   console.log(
  //     "the  image url in the gallery section is ",
  //     galleryTab[0].imageUrl
  //   );

  return (
    // <div>slides ar </div>
    <div className="w-full mx-2">
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 md:mx-0">
          {images.map((x: any, index: any) => {
            return (
              <div key={index} className=" bg-[#c7ecdd] relative  ">
                <div className="group h-full">
                  <div
                    className="bg-cover bg-center h-80 md:h-[30vw] w-full bg-no-repeat relative"
                    style={{
                      backgroundImage: `url("${x.imageUrl}")`,
                      backgroundSize: "contain", // Ensure the entire image fits
                    }}
                  >
                    <div className=" hidden md:block text-3xl text-[#EE8A27] font-bold absolute bottom-0 left-2 z-10 space-y-3">
                      {/* <div>{x.title}</div> */}
                      <div>{x.description}</div>
                    </div>
                  </div>
                  <div
                    className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                    onClick={() => openLightbox(index)}
                  >
                    <p className="text-white">
                      <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        // showPrevNext={false}
        // currentIndex={imageIndex}
        slides={slides}
      />
    </div>
  );
};

export default Gallery;
