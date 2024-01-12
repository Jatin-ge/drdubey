import React from "react";
import Navbar from "../Navbar/navbar";
import Image from "next/image";

type Props = {};

const Section2 = (props: Props) => {
  return (
    <>
      <Navbar />
      <section className="flex items-center bg-stone-100  font-poppins dark:bg-inherit ">
        <div className="justify-center flex-1 max-w-[90%] py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mx-auto mb-10 lg:w-1/3 lg:mb-0">
              <span className="text-lg font-semibold text-primary uppercase">
                Who we are
              </span>
              <h2 className="mt-2 mb-6 text-2xl md:text-4xl font-bold dark:text-gray-300">
                Quick Introduction about{" "}
                <span className="text-primary">Dr Dheeraj Dubay</span>
              </h2>
              <p className="max-w-3xl mt-3 text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-200 md:mt-8">
                Sr. Consultant Joint Replacement Surgery - Shalby
                Multi-Specialty Hospitals Jaipur
              </p>
              <li className="mx-1 font-semibold text-xl text-gray-600 my-4">
                MBBS, MS (Orthopedic), FJRS (Germany)
              </li>
              <p className="max-w-4xl mt-2 text-xl lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                He has more than{" "}
                <span className="font-bold text-black dark:text-gray-200">
                  15 years of experience
                </span>{" "}
                in the field of Joint Replacement Surgeries with latest
                techniques such as computer navigation and minimally invasive
                surgeries. Now he is performing replacement surgeries at Shalby
                Multi-Specialty Hospital, Jaipur. He has done more than{" "}
                <span className="text-black font-bold dark:text-gray-200">
                  21000{" "}
                </span>
                successful Joint Replacement Surgeries. Record of{" "}
                <span className="text-black font-bold dark:text-gray-200">
                  21{" "}
                </span>{" "}
                joint replacement surgeries in a day in Rajasthan. He has been
                awarded for excellence in Joint Replacement surgery by the
                Health Minister of Rajasthan for the last 3 consecutive years.
                He has recently been felicitated by the Honourable central
                Health Minister & Family Welfare Minister as the most trusted
                Joint Replacement Surgeon of North India.
              </p>
              <div
                className="max-w-max mt-4 px-4 py-3 text-gray-100 uppercase
                bg-primary rounded hover:bg-cyan-500 dark:hover:bg-cyan-500
                dark:hover:text-gray-50 dark:text-gray-100 hover:text-gray-100 "
              >
                Know More
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative">
                <Image
                  width={1200}
                  height={1200}
                  src={"/assets/images/hero2.JPG"}
                  alt="aboutimage"
                  className="relative z-10 object-cover w-full h-full rounded"
                />
                <div className="absolute bottom-0 right-0 z-10 p-4 bg-white shadow sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                  <p className="text-lg font-semibold">
                    15 Years of Experience in the joint replacement surgery
                  </p>
                </div>
                <div className="absolute hidden w-full h-full bg-primary rounded -bottom-6 left-6 lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
