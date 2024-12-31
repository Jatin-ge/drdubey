"use client";
import React from "react";
import CountUp from "react-countup";

export const Stats = () => {
  return (
    <div data-aos="" className="mt-8 bg-[#E2FFF5] dark:bg-inherit">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
          <div
            data-aos="flip-left"
            className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-inherit borderhover:scale-110   dark:bg-slate-900 dark:border-gray-800"
          >
            <div className="inline-flex justify-center items-center">
              <span className="w-2 h-2 inline-block bg-gray-500 rounded-full mr-2"></span>
              <span className="text-lg font-semibold uppercase text-gray-600 dark:text-gray-400">
                Surgeries in a Day
              </span>
            </div>

            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                <CountUp end={34} duration={10} />
              </h3>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-inherit borderhover:scale-110  dark:bg-slate-900 dark:border-gray-800"
          >
            <div className="inline-flex justify-center items-center">
              <span className="w-2 h-2 inline-block bg-green-500 rounded-full mr-2"></span>
              <span className="text-lg font-semibold uppercase text-gray-600 dark:text-gray-400">
                Successful Surgeries
              </span>
            </div>

            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                <CountUp end={25000} duration={10} />+
              </h3>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-inherit borderhover:scale-110  dark:bg-slate-900 dark:border-gray-800"
          >
            <div className="inline-flex justify-center items-center">
              <span className="w-2 h-2 inline-block bg-green-500 rounded-full mr-2"></span>
              <span className="text-lg font-semibold uppercase text-gray-600 dark:text-gray-400">
                Happy Patients
              </span>
            </div>

            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                <CountUp end={30000} duration={10} />+
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
