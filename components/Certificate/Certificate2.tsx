import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Certificate2 = (props: Props) => {
  return (
    <div>
      <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
            <div className="relative">
              <Image
                width={1200}
                height={900}
                className="w-full rounded-md"
                src="/assets/images/award.jpeg"
                alt="Image Description"
              />
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
            <div>
              <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight dark:text-white">
                Dr. Dubay Breaks
                <span className="text-primary"> Forbes World Record </span>
                for Highest Number of joint replacement surgeries in a single day.
              </h1>
              <p className="mt-3 text-xl md:text-2xl text-gray-800 dark:text-gray-400">
                Dr. Dubay from Rajasthan, India, made history by performing{" "}
                <b>34 joint replacement surgeries </b>
                and <b>1 hip replacement surgery</b> in a single day, earning a
                spot in the Forbes World Record.
              </p>

              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                {/* City Dropdown */}

                <div className="">
                  <Link
                    className="p-2 relative inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-blue-700 border border-primary text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                    href={"/booking/jaipur"}
                  >
                    Book an appoinment
                  </Link>
                </div>

                <Link
                  href={"/contact"}
                  className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate2;
