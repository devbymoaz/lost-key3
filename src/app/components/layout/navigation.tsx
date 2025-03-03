"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import { BiX, BiMenu } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full">
            <div className="bg-secondary p-2 text-center text-white text-sm sm:text-base">
                Free shipping from 20€ | Delivery time 1-3 working days
            </div>

            <div className="px-6 md:px-12 flex bg-white shadow-md w-full items-center justify-between py-4">
                <Image
                    src="/WhatsApp Image 2025-03-03 at 11.30.59 PM.jpeg"
                    alt="WhatsApp Image"
                    width={48} // Adjust based on your needs
                    height={48} // Adjust based on your needs
                    className="h-12 w-auto"
                />

                <div className="hidden md:flex gap-6">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-xl ${pathname === href ? "text-primary font-bold" : "font-semibold"}`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                <FaPhoneAlt size={30} className="text-blue-900 text-2xl md:text-3xl font-bold hidden md:block" />

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <BiX size={28} /> : <BiMenu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden flex flex-col gap-4 bg-white shadow-md px-6 py-4"
                    >
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`text-lg ${pathname === href ? "text-primary font-bold" : "font-semibold"}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <FaPhoneAlt />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
