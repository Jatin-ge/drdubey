"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const AchievementCollage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-semibold text-lg mb-4 block">
            Our Journey of Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Moments of Excellence
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
          <Image
            src="/assets/images/HomePagePic.jpeg"
            alt="Our Journey of Excellence"
            layout="fill"
            objectFit="contain"
            className="object-cover"
          />
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Golden Warriors Walkathon 2025: A New Era in Orthopedic Care
          </h3>
          <p className="text-lg text-gray-700">
            Dr. Dheeraj Dubey&apos;s Golden Warriors Walkathon 2025 marked a significant step toward transforming lives in the field of orthopedics. This landmark event brought together individuals to promote mobility, resilience, and a pain-free future. Together, we are redefining possibilities in joint health and active living!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCollage; 