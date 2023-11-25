import React from "react";

import CallIcon from "@mui/icons-material/Call";
import Person4Icon from "@mui/icons-material/Person4";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

type Props = {};

const Booknow = (props: Props) => {
  return (
    <div className=" my-16">
      <div className="bg-[#E2FFF5]  p-10 flex flex-col items-center">
        <h1 className="text-xl text-primary font-semibold">BOOK NOW</h1>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-700 text-center">
          Book your medical appointment Today
        </h1>
        <div className="mt-8 flex flex-col lg:flex-row">
          <Link
            href={"/booking"}
            className="bg-[#B9F7CD] px-12 py-4 m-2 flex items-center dark:text-gray-800"
          >
            <CallIcon className="mx-2" />
            Book an appointment
          </Link>
          <button className="border bg-transparent text-black border-black px-12 py-4 m-2 flex items-center">
            <Person4Icon className="mx-2" />
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
