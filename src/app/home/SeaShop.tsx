import Image from "next/image";
import Button from "../components/common/button/Button";

export default function SeaShop() {
    const data = [
        { title: "Let's save sea turtles together!" },
        { description: "With every purchase of an OLAF pendant or sticker set, you save the life of a sea turtle in Bali in cooperation with the Turtle Conservation And Education Center (TCEC)!" },
    ];

    return (
        <div className="relative w-full h-screen">
            <Image
                src="/3ff1d8_b0b8c3b3393441be9a7b4209f8fa3d59~mv2.jpg"
                alt="Background"
                fill
                className="object-cover -z-10"
            />

            <div className="absolute right-0 top-0 lg:w-1/2 md:w-2/3 sm:w-full h-full bg-[#E0E4E5]/90 flex flex-col items-start justify-evenly p-10 sm:p-6">
                {data.map((val, ind) => (
                    <div key={ind} className="text-black space-y-3 max-w-[70%] sm:max-w-full">
                        <h1 className="text-5xl sm:text-3xl font-bold text-primary">{val.title}</h1>
                        <p className="text-lg sm:text-base">{val.description}</p>
                    </div>
                ))}

                <div className="flex gap-3 flex-wrap sm:justify-center">
                    <Button className="bg-primary hover:bg-primary/80 text-white">To the shop</Button>
                    <Button className="bg-transparent text-black border border-black">Learn More</Button>
                </div>
            </div>
        </div>
    );
}
