"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export const Stats = () => {
  const stats = [
    {
      title: "Surgeries in a Day",
      count: 34,
      color: "bg-blue-500",
      suffix: "",
    },
    {
      title: "Successful Surgeries",
      count: 24000,
      color: "bg-green-500",
      suffix: "+",
    },
    {
      title: "Happy Patients",
      count: 30000,
      color: "bg-purple-500",
      suffix: "+",
    },
  ];

  return (
    <div className="relative mt-8 bg-gradient-to-b from-[#F4FEFA] to-white dark:from-gray-900/50 dark:to-gray-800/50 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/30"></div>
      
      <div className="relative max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent md:text-5xl">
            Milestones & Achievements
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1.5 w-32 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative h-full p-8 bg-white dark:bg-gray-800 rounded-2xl border border-emerald-100 dark:border-emerald-800 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                      <span className="text-3xl text-white font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {stat.title}
                  </h3>
                  
                  <div className="relative">
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                      <CountUp
                        end={stat.count}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
