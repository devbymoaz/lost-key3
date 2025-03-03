import Image from "next/image";

export default function OurMission() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 max-w-screen-lg mx-auto">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">Our Mission</h2>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Our mission is to provide a seamless and efficient platform for lost and found services. 
          We aim to reunite people with their belongings through technology and a user-friendly interface.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
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
      </div>
    </section>
  );
}
