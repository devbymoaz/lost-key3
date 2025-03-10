"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../common/button/Button";
// import { FaBagShopping } from "react-icons/fa6";
// import { FaMobileAlt } from "react-icons/fa";
// import { GiHouseKeys } from "react-icons/gi";
// import { MdOutlinePets } from "react-icons/md";
// import { IoMdWallet } from "react-icons/io";

export default function CustomHeroSection() {
  const images = [
    "/3ff1d8_d12bf09b00324487936a70338c2db02e~mv2.jpg",
    "/3ff1d8_f1643df73163432394da4438b45b279d~mv2.jpg",
    "/a8f8c3_c741f38b46594d8ba078058444f6dfef~mv2.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextIndex = (currentIndex + 1) % images.length;


  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          key={nextIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={images[nextIndex]}
            alt={`Slide ${nextIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center gap-5 items-center text-white text-center px-4">
      <div>
  <motion.h1
  style={{ textShadow: "2px 2px 15px rgba(0, 0, 0, 0.5)" }}
    className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-xl"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    Online Lost And Found
  </motion.h1>

  <motion.p
  style={{ textShadow: "6px 6px 10px rgba(0, 0, 0, 0.5)" }}
    className="text-base sm:text-lg md:text-2xl mt-4 font-bold text-white drop-shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.8 }}
  >
    The fastest Lost and Found office in the world
  </motion.p>
</div>

        <Button className="text-white rounded-full bg-primary border border-white">To the shop</Button>
      </div>


    </div>
  );
}
