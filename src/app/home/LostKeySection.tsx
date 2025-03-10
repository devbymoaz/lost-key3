import Image from "next/image";
import { FaKey } from "react-icons/fa";

export default function LostKeySection() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-gray-100">
            <div className="relative w-full lg:w-1/2 flex justify-center">
                <Image
                    src="/pexels-black-ice-551383-1314549.jpg" 
                    alt="Lost Key"
                    width={550}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
            </div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                    Discover How Our Lost Key Platform Works
                </h2>
                <p className="text-lg text-gray-600">
                    Our platform simplifies the process of recovering lost keys. Register your 
                    keys with a unique QR code, allowing finders to easily identify and return them. 
                    Enjoy peace of mind with our privacy-focused service, which requires no personal information.
                </p>

                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                        <FaKey className="text-primary text-xl" /> 
                        <span>Register your keys with a unique QR code.</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                        <FaKey className="text-primary text-xl" /> 
                        <span>Finders scan the code to identify the owner.</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                        <FaKey className="text-primary text-xl" /> 
                        <span>Receive your keys back with no personal data shared.</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
