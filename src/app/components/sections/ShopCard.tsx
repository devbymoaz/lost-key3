import Image from "next/image";

interface ShopCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

export default function ShopCard({ image, title, price, description }: ShopCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md">
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover" 
          className="rounded-md"
        />
      </div>
      <h2 className="text-xl font-bold mt-3">{title}</h2>
      <p className="text-lg text-gray-700 font-semibold">{price}</p>
      <p className="text-primary text-sm mt-2">{description}</p>
    </div>
  );
}
