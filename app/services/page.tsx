import React from "react";

import PsychologyIcon from "@mui/icons-material/Psychology";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import Navbar from "@/components/Navbar/navbar";
import { db } from "@/lib/db";
type Props = {};

const page = async (props: Props) => {
  const services = await db.services.findMany();

  console.log(services);

  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center max-w-6xl  px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
            We Provide more than 5 Services
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {services.map((item) => (
            <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
              <img
                src={item.image}
                alt="Card img"
                className="object-cover object-center w-full h-48"
              />
              <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                  <div>
                    <a
                      href="#"
                      className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600 border-b-2 border-blue-600 hover:text-blue-600"
                    >
                      {item.title}
                    </a>
                    <p className="mb-4">{item.subtitle}</p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
