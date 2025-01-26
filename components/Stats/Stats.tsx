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
    <div className="relative mt-8 bg-gradient-to-b from-[#E2FFF5] to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700"></div>
      
      <div className="relative max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Our Impact in Numbers
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-24 bg-primary rounded-full"></div>
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
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="h-full p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                
                <div className="relative flex flex-col items-center">
                  <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl text-white">
                      {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">
                    {stat.title}
                  </h3>
                  
                  <div className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
//