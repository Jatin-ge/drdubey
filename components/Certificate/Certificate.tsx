import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Certificate = (props: Props) => {
  return (
    // <div className="flex flex-col items-center justify-center mb-8 xl:space-x-5">
    //   <h1 className=" text-center my-8 w-[80%] font-extrabold text-gray-700 text-xl lg:text-3xl xl:text-6xl leading-relaxed ">
    //     <span className="text-primary">Dr. Dheeraj</span> got awarded for{" "}
    //     <span className="text-primary">Most Trusted </span>Joint Replacement
    //     Surgeon of the Year
    //   </h1>
    //   <Image
    //     width={900}
    //     height={900}
    //     src="/assets/images/certi2.jpeg"
    //     alt="certi"
    //   />
    // </div>

    <div>
      <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div data-aos="fade-right" className="relative ml-4 my-8 md:my-44">
            <Image
              width={1200}
              height={900}
              className="w-full rounded-md"
              src="/assets/images/certi2.jpeg"
              alt="Image Description"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
          </div>

          <div data-aos="fade-left">
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight dark:text-white">
              Dr. Dubay got awarded for
              <span className="text-primary"> Most Trusted</span> Joint
              Replacement Surgeon of the Year
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-gray-800 dark:text-gray-400">
              Experience the freedom of movement with Dr. Dheeraj Dubay Joint
              Replacement Surgery – paving the way to a pain-free and active
              life. Your joints, your journey, your renewed vitality!
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              {/* City Dropdown */}

              <div className="">
                {/* <Button
                  className="p-2 border rounded relative inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-blue-700 border border-primary text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"

                  onClick={() => onOpen("selectCity")}
                >
                 Book an appoinment
                </Button> */}
                <Link
                  className="p-2 border rounded relative inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-blue-700 border border-primary text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
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
  );
};

export default Certificate;
