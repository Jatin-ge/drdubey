import React from "react";
import { Stats } from "../Stats/Stats";
import Image from "next/image";

type Props = {};
//

const Card1 = (props: Props) => {
  return (
    <div>
      <section className="pt-10 overflow-hidden bg-[#F4FEFA] dark:bg-inherit  py-8 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="lg:w-[85%] px-4 mx-auto sm:px-6 lg:px-8 ">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold leading-tight text-gray-700 sm:text-5xl lg:text-7xl dark:text-gray-100">
                Dr. Dheeraj Dubay
              </h2>
              <p className="max-w-3xl mt-3 text-xl lg:text-3xl leading-relaxed text-gray-600 dark:text-gray-200 md:mt-8">
                Sr. Consultant Joint Replacement Surgery - Shalby
                Multi-Specialty Hospitals Jaipur
              </p>
              <li className="mx-1 font-semibold text-xl text-gray-600 dark:text-gray-200 mt-4">
                MBBS, MS (Orthopedic), FJRS (Germany)
              </li>
              <p className="max-w-4xl mt-3 text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                He has more than{" "}
                <span className="font-bold text-black dark:text-gray-200">
                  16 years of experience
                </span>{" "}
                in the field of Joint Replacement Surgeries and is well wersed
                with latest techniques such as computer navigation and minimally
                invasive surgeries. Now he is performing replacement surgeries
                at Shalby Multi-Specialty Hospital, Jaipur. He has done more
                than{" "}
                <span className="text-black font-bold dark:text-gray-200">
                  24000{" "}
                </span>
                successful Joint Replacement Surgeries. Record of{" "}
                <span className="text-black font-bold dark:text-gray-200">
                  34{" "}
                </span>{" "}
                joint replacement surgeries in a day in Rajasthan. He has been
                awarded for excellence in Joint Replacement surgery by the
                Health Minister of Rajasthan for the last 3 consecutive years.
                He has recently been felicitated by the Honourable central
                Health Minister and Social and Family Welfare Minister as the
                most trusted Joint Replacement Surgeon of North India.
              </p>

              <div className="my-8 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-l-4 border-amber-400 rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 15.4L9.2 17l.8-3.3L7.3 11l3.4-.3L12 7.6l1.3 3.1 3.4.3-2.7 2.7.8 3.3z"/>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
                  </svg>
                  <p className="text-lg font-medium text-amber-800 dark:text-amber-200">
                    Awarded for excellence in Joint Replacement surgery by the Health Minister of Rajasthan for 3 consecutive years
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xl text-gray-600 md:mt-8 dark:text-gray-300">
                <div className="inline-flex items-center gap-2 p-3 px-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <span className="font-medium">Have a question?</span>
                  <a
                    href="https://www.linkedin.com/in/dr-dheeraj-dubay-36399599/"
                    className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-colors duration-200"
                  >
                    Ask on LinkedIn
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-5 h-5"
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </p>
            </div>

            <div data-aos="fade-left" className="relative ">
              {/* <img
                className="absolute inset-x-0 bottom-0 -mb-56 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              /> */}

              <Image
                width={1400}
                height={1400}
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:scale-150"
                src="/assets/images/hero.png"
                alt="dub"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card1;
