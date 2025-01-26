import React from "react";
import Image from "next/image";

type Props = {};
//

const Card1 = (props: Props) => {
  return (
    <div>
      <section className="pt-10 overflow-hidden bg-[#F4FEFA] dark:bg-inherit py-8 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="lg:w-[85%] px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-right" className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
                Dr. Dheeraj Dubay
              </h2>
              <p className="text-xl lg:text-2xl font-medium text-emerald-600 dark:text-emerald-400">
                Sr. Consultant Joint Replacement Surgery - Shalby
                Multi-Specialty Hospitals Jaipur
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                <span className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">
                  MBBS, MS (Orthopedic), FJRS (Germany)
                </span>
              </div>
              
              <p className="text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                He has more than{" "}
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
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

              <div className="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50 dark:border-amber-700/30">
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-amber-600 to-yellow-500 dark:from-amber-400 dark:to-yellow-300 bg-clip-text text-transparent mb-1">
                      Excellence in Joint Replacement Surgery
                    </h4>
                    <p className="text-base text-amber-900 dark:text-amber-200">
                      Awarded by the Health Minister of Rajasthan for 3 consecutive years
                    </p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="font-medium text-gray-700 dark:text-gray-200">Have a question?</span>
                <a
                  href="https://www.linkedin.com/in/dr-dheeraj-dubay-36399599/"
                  className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-600 transition-colors duration-200"
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
            </div>

            <div data-aos="fade-left" className="relative">
              <Image
                width={1400}
                height={1400}
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:scale-125 rounded-2xl shadow-2xl"
                src="/assets/images/hero.png"
                alt="Dr. Dheeraj Dubay"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card1;
