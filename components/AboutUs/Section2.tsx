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
            <div className="w-full px-4 mx-auto mb-10 lg:w-[44%] lg:mb-0">
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
                Dr. Dheeraj Dubay is a renowned joint replacement surgeon in
                North India with over 15 years of experience. His career
                includes prestigious roles at Sir Gangaram Hospital, New Delhi,
                and Shalby Hospital, Ahmedabad. Dr. Dubay, who trained in
                complex and revision joint replacement surgeries at Germany's
                Aklepios Ortho Center, excels in advanced techniques like
                computer navigation and minimally invasive surgeries. Currently
                at Shalby Multi-Specialty Hospital, Jaipur, he has successfully
                performed over 21,000 joint replacements, setting a record of 21
                surgeries in a single day in Rajasthan. Recognized for his
                contributions, he has received multiple awards from Rajasthan's
                Health Minister and was recently honored as North India's most
                trusted Joint Replacement Surgeon by the central Health
                Minister. Dr. Dubay is also dedicated to educating the public
                about bone and joint health through various social platforms.
              </p>
              <div
                className="max-w-max mt-4 px-4 py-3 text-gray-100 uppercase
                bg-primary rounded hover:bg-cyan-500 dark:hover:bg-cyan-500
                dark:hover:text-gray-50 dark:text-gray-100 hover:text-gray-100 "
              >
                Know More
              </div>
            </div>
            <div className="w-full px-4 md:my-8 mb-10 lg:w-1/2 lg:mb-0">
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
