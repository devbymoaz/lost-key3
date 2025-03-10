"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

interface ShopCardProps {
  id: number;
  image: string;
  hoverImage: string; 
  title: string;
  price: string;
  description: string;
}

export default function ShopCard({ id, image, hoverImage, title, price, description }: ShopCardProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    router.push(`/shop/product/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-52 relative rounded-xl overflow-hidden group">
        <Image
          src={isHovered ? hoverImage : image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center py-2 
        translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          Quick View
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 font-medium mt-1">{price}</p>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  );
}
