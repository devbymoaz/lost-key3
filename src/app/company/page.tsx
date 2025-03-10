"use client";
import Image from "next/image";
import NewsHeroSection from "../components/sections/newsHeroSection";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div>
      <NewsHeroSection
        imageSrc="/pexels-busra-altin-60338887-30780540.jpg"
        title="The promotional item of the 21st century!"
        subtitle="Ballpoint pens, notepads, gummy bears, and jute bags as gifts? As customers, we prefer innovative and useful solutions."
        overlayOpacity="bg-opacity-80"
      />

      {/* How It Works Section */}
      <section className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            A Seamless Shopping Experience
          </h2>
          <p className="text-lg text-gray-700">
            Our streamlined process ensures a smooth experience from product selection to QR code generation. Follow these simple steps to get started.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-bold">Step 1:</span> Browse and add your favorite items to the cart.</li>
            <li><span className="font-bold">Step 2:</span> Enter the required details to personalize your experience.</li>
            <li><span className="font-bold">Step 3:</span> Instantly generate a QR code for your purchase.</li>
            <li><span className="font-bold">Step 4:</span> Scan the QR code for easy access to order details.</li>
          </ul>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/pexels-kampus-7289717.jpg"
            alt="Shopping Process"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* QR Code Process */}
      <section className="container mx-auto py-16 px-6 text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Effortless Access with QR Codes
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Once you complete your order, a unique QR code is generated. Simply scan it to access all relevant details instantly.
        </motion.p>
        
        {/* QR Code Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/pexels-pavel-danilyuk-7937958.jpg"
            alt="QR Code Process"
            width={400}
            height={300}
            className="mx-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </section>
    </div>
  );
}
