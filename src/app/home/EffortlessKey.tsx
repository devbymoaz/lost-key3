import Image from "next/image";
import { FaKey } from "react-icons/fa";

export default function EffortLessSection() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-gray-100">

            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                Effortlessly Locate Your Lost Keys
                </h2>
                <p className="text-lg text-gray-600">
                Discover how our platform makes it simple to find your lost keys. With a unique QR code, you can track and recover your keys without sharing personal information. Enjoy peace of mind and a seamless recovery experience with our innovative service.
                </p>

                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                        <FaKey className="text-primary text-xl" />
                        <span>Register your keys with a unique QR code.</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                        <FaKey className="text-primary text-xl" />
                        <span>Track and locate lost keys effortlessly.</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                        <FaKey className="text-primary text-xl" />
                        <span>Enjoy privacy with no personal data required.</span>
                    </li>
                </ul>
            </div>
            <div className="relative w-full lg:w-1/2 flex justify-center">
                <Image
                    src="/pexels-rdne-8293714.jpg"
                    alt="Lost Key"
                    width={550}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
}
