import React from "react";
import { motion } from "framer-motion";

const AwardsSection = () => {
  const awards = [
    "Most trusted Joint Replacement Surgeon of North India by central minister S.P bhagel and Athawale ji in Delhi 2024",
    "UP Ratan samman award for excellent work in the field of Joint Replacement by Central minister Giriraj singh ji 2024",
    "International business award by Sonu Sood in Delhi 2023",
    "Health care Achievers award for most trusted Joint Replacement Surgeon of the year 2023",
    "Excellence in Hip and Knee Replacement in Rajasthan by Big FM 2023",
    "ET leadership excellence award (Times of India) in the field of Joint Replacement Surgery by Governor of Rajasthan and Miss universe 2023",
    "Health care award for Best Joint Replacement Surgeon of Rajasthan by Dainik Bhaskar 2022",
    "Big Impact award by Big FM for Excellence in Joint Replacement Surgery",
  ];

  const achievements = [
    "'World Record Holder' of performing 'Highest Numbers Of Joint Replacement Surgeries in a Single Day' Acknowledged by Forbes, IBR and Golden book of World Records in 2024",
    "One of best Joint Replacement surgeon of the North India performing highest numbers of Knee and Hip Replacements per month",
    "One of the fastest Joint Replacement Surgeon of the India who performed Knee Replacement within 10 to 15 minutes by his latest Zero technique with fast track Rehabilitation",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f0f4ff] to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-700 mb-4">
            <span className="text-primary">|</span> Recognition & Excellence{" "}
            <span className="text-primary">|</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-shadow duration-300"
          >
            <div className="flex items-center mb-8">
              <div className="w-1.5 h-8 bg-primary rounded-full mr-4"></div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                Awards
              </h2>
            </div>
            <ul className="space-y-6">
              {awards.map((award, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="flex items-start group"
                >
                  <span className="text-primary text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">
                    •
                  </span>
                  <span className="text-gray-700 text-lg leading-relaxed font-medium group-hover:text-primary transition-colors duration-300">
                    {award}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-shadow duration-300"
          >
            <div className="flex items-center mb-8">
              <div className="w-1.5 h-8 bg-primary rounded-full mr-4"></div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                Achievements
              </h2>
            </div>
            <ul className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="flex items-start group"
                >
                  <span className="text-primary text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">
                    •
                  </span>
                  <span className="text-gray-700 text-lg leading-relaxed font-medium group-hover:text-primary transition-colors duration-300">
                    {achievement}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
