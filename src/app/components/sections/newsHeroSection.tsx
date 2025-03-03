import Image from "next/image";

interface NewsHeroSectionProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  overlayOpacity?: string; // Optional prop for opacity control
}

export default function NewsHeroSection({
  imageSrc,
  title,
  subtitle,
  overlayOpacity = "bg-opacity-60", 
}: NewsHeroSectionProps) {
  return (
    <div className="relative w-full h-[40vh]">
      <Image
        src={imageSrc}
        alt="News Background"
        fill
        className="object-cover"
        priority
      />

      <div className={`absolute inset-0 bg-primary ${overlayOpacity}`}></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="text-lg md:text-2xl mt-4">{subtitle}</p>
      </div>
    </div>
  );
}
