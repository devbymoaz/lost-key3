"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12  mx-auto">
      
      {/* Text Animation - Comes from Left */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary">Our Mission</h2>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Our mission is to provide a seamless and efficient platform for lost and found services. 
          We aim to reunite people with their belongings through technology and a user-friendly interface.
        </p>
      </motion.div>

      {/* Image Animation - Comes from Right */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-56 sm:h-64 md:h-80">
          <Image 
            src="/wmremove-transformed (1) 1.png" 
            alt="Our Mission" 
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </motion.div>

    </section>
  );
}
