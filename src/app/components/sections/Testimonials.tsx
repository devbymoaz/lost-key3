"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Testimonial = {
  feedback: string;
  name: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    feedback:
      "Comprehensible input is a game-changer. I’ve never made so much progress in Arabic as I have in the last four months, just by watching videos with no subtitles. At first, I struggled with my short attention span for the language, but by sticking to content I enjoyed, my comprehension has skyrocketed.",
    name: "Callum J",
    image: "/Ellipse 26.png",
  },
  {
    feedback:
      "Comprehensible input is a game-changer. I’ve never made so much progress in Arabic as I have in the last four months, just by watching videos with no subtitles. At first, I struggled with my short attention span for the language, but by sticking to content I enjoyed, my comprehension has skyrocketed.",
    name: "Arianne Z",
    image: "/Ellipse 27.png",
  },
  {
    feedback:
      "Comprehensible input is a game-changer. I’ve never made so much progress in Arabic as I have in the last four months, just by watching videos with no subtitles. At first, I struggled with my short attention span for the language, but by sticking to content I enjoyed, my comprehension has skyrocketed.",
    name: "Sophia M",
    image:"/Ellipse 27.png", 
  },
  {
    feedback:
      "Comprehensible input is a game-changer. I’ve never made so much progress in Arabic as I have in the last four months, just by watching videos with no subtitles. At first, I struggled with my short attention span for the language, but by sticking to content I enjoyed, my comprehension has skyrocketed.",
    name: "James L",
    image: "/Ellipse 27.png",
  },
];

const avatarPositions = [
  { top: "25%", left: "20%" },
  { top: "10%", right: "10%" },
  { bottom: "20%", left: "15%" },
  { bottom: "25%", right: "10%" },
  { top: "40%", left: "80%" },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="py-16 px-6 sm:px-10 lg:px-20 bg-[#F5F9FF] relative flex flex-col items-center"
      style={{
        backgroundImage: `url('/Group 6.png'), url('/Group 5.png')`,
        backgroundPosition: "800px 200px, 360px 430px",
        backgroundSize: "300px, 300px",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <h1 className="text-2xl md:text-3xl lg:text-[52px] font-bold text-primary text-center mb-12 font-pally">
      CUSTOMER TESTIMONIALS
      </h1>

      {/* Floating Avatars */}
      {avatarPositions.map((pos, index) => (
        <div
          key={index}
          className="absolute w-14 h-14 rounded-full border-2 border-gray-300 shadow-lg hidden lg:block"
          style={{
            position: "absolute",
            ...pos,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={testimonials[index % testimonials.length].image}
            alt="avatar"
            width={56}
            height={56}
            className="rounded-full object-cover"
          />
        </div>
      ))}

      {/* Main Testimonials Carousel */}
      <div className="relative w-full max-w-[90%] md:max-w-lg h-auto min-h-80 flex justify-center items-center">
  {testimonials.map((testimonial, index) => {
    const isActive = index === currentIndex;
    const isNext = index === (currentIndex + 1) % testimonials.length;
    const isPrev =
      index === (currentIndex - 1 + testimonials.length) % testimonials.length;

    return (
      <div
        key={index}
        className={`absolute w-full max-w-[95%] sm:max-w-[80%] md:max-w-[540px] h-auto p-4 md:p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 ${
          isActive
            ? "z-20 scale-100 opacity-100 top-0"
            : isNext || isPrev
            ? "z-10 scale-95 opacity-70 top-6"
            : "z-0 scale-90 opacity-40 top-12"
        }`}
      >
        <div className="mt-4 flex gap-2 md:gap-4 items-center">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="rounded-full border-2 border-gray-300"
          />
          <h4 className="text-lg md:text-2xl font-pally font-bold text-primary">
            {testimonial.name}
          </h4>
        </div>

        <p className="text-[#0C3373] text-sm md:text-xl font-HelveticaNeue text-left mt-4">
          {testimonial.feedback}
        </p>
      </div>
    );
  })}
</div>


      {/* Navigation Buttons */}
      <div className="mt-32 mb-12 flex justify-center items-center space-x-6">
        <button
          onClick={handlePrev}
          className="bg-gray-300 text-black p-3 rounded-full hover:bg-primary transition hover:text-white"
        >
          <FaChevronLeft className="text-lg" />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-300 text-black p-3 rounded-full hover:bg-primary transition hover:text-white"
        >
          <FaChevronRight className="text-lg" />
        </button>
      </div>

     
    </div>
  );
};

export default Testimonials;
