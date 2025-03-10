"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 gap-12 md:px-16 py-12  mx-auto">
      
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary">Our Mission and Values</h2>
        <p className="mt-4 text-base md:text-lg text-gray-600">
        At Lost Key, we are dedicated to providing a reliable and user-friendly solution for lost key recovery. Our mission is to ensure the privacy and security of our users while fostering a sense of community engagement. We believe in innovation and trust, which are at the core of our values. Our team is committed to transparency and creating a platform that not only helps individuals recover their lost keys but also rewards those who assist in the process. With a unique QR code system, we make it easy for finders to return keys to their rightful owners, ensuring a seamless recovery experience for everyone involved.
        </p>
      </motion.div>

      <motion.div
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <div className="relative w-full  h-56  md:h-80">
          <Image 
            src="/pexels-pavel-danilyuk-7937958.jpg" 
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
