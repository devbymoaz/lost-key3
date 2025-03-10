"use client";
import { motion } from "framer-motion";
import NewsHeroSection from "../components/sections/newsHeroSection";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <NewsHeroSection 
        imageSrc="/pexels-mark-thomas-2149938474-31044308.jpg" 
        title="About Us" 
        subtitle="Learn more about our journey and values."
      />

      {/* Our Mission & Vision */}
      <motion.section 
        className="container mx-auto py-16 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Our Mission & Values
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-700 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          At Lost Key, we are dedicated to providing a reliable and user-friendly solution for lost key recovery. We believe in innovation and trust, ensuring privacy and security while fostering community engagement.
        </motion.p>
      </motion.section>

      {/* Our Values */}
      <motion.section 
        className="w-full h-screen flex bg-gray-100"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-1/2 h-full relative">
          <Image 
            src="/pexels-busra-altin-60338887-30780540.jpg" 
            alt="Our Values" 
            layout="fill" 
            objectFit="cover" 
            priority
          />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center p-10">
          <motion.div 
            className="max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Values</h2>
            <ul className="text-lg text-gray-700 list-disc pl-5">
              <li><strong>Privacy & Security:</strong> No personal data is shared during key recovery.</li>
              <li><strong>Innovation:</strong> Our QR code system simplifies lost key retrieval.</li>
              <li><strong>Trust & Community:</strong> Rewarding those who help return lost keys.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        className="container mx-auto py-16 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Our platform simplifies lost key recovery with a seamless process.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-white p-6 shadow-lg rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2">🔑 Register Your Keys</h3>
            <p className="text-gray-700">Assign a unique QR code to your keys for easy identification.</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 shadow-lg rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2">📲 Scan & Notify</h3>
            <p className="text-gray-700">Finders scan the QR code to notify the owner.</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 shadow-lg rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2">🔁 Get Your Keys Back</h3>
            <p className="text-gray-700">Retrieve your keys without sharing personal details.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Privacy & Security */}
      <motion.section 
        className="container mx-auto py-16 px-6 text-center bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Privacy & Security</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We ensure your privacy by using secure QR codes, eliminating the need for personal data exchange.
        </p>
      </motion.section>

    {/* Section 2 - Content Left, Image Right */}
    <motion.section 
        className="w-full h-screen flex"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-1/2 h-full flex items-center justify-center bg-gray-200">
          <motion.div 
            className="max-w-lg text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-700">
              Our expertise, commitment to quality, and customer-first approach make us the perfect choice for your needs.
            </p>
          </motion.div>
        </div>
        <div className="w-1/2 h-full relative">
          <Image 
            src="/pexels-anytiffng-2097616 (1).jpg" 
            alt="Section 8" 
            layout="fill" 
            objectFit="cover" 
            priority
          />
        </div>
      </motion.section>
      {/* Community Engagement */}
      <motion.section 
        className="container mx-auto py-16 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Community Engagement</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We reward individuals who help return lost keys, fostering trust and engagement.
        </p>
      </motion.section>
    </>
  );
}
