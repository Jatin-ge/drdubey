import React from "react";

import CallIcon from "@mui/icons-material/Call";
import Person4Icon from "@mui/icons-material/Person4";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

type Props = {};

const Booknow = (props: Props) => {
  return (
    <div className=" md:px-[100px] py-[100px]">
      <div className="bg-primary p-10 flex flex-col items-center">
        <h1 className="text-xl  font-semibold">BOOK NOW</h1>
        <h1 className="text-4xl font-semibold mt-2 text-center">
          Book your medical appointment Today
        </h1>
        <div className="mt-8 flex flex-col lg:flex-row">
          <button className="bg-white px-12 py-4 m-2 flex items-center">
            <CallIcon className="mx-2" />
            Book an appointment
          </button>
          <button className="border bg-black text-white border-black px-12 py-4 m-2 flex items-center">
            <Person4Icon className="mx-2" />
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
