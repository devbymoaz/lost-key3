"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "../../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import { BiX, BiMenu } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";

export default function Navigation() {
    const pathname = usePathname();
    const [total, setLength] = useState<string[]>([]);

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const storedCart = localStorage.getItem("cartItems");
        if (storedCart) {
            setLength(JSON.parse(storedCart).length);  
        }
    }, []);
    

    return (
        <nav className="w-full">
            <div className="bg-secondary p-2 text-center text-white text-sm sm:text-base">
                Free shipping from 20€ | Delivery time 1-3 working days
            </div>

            <div className="px-6 md:px-12 flex bg-white shadow-md w-full items-center justify-between py-4">
                <Image
                    src="/WhatsApp Image 2025-03-03 at 11.30.59 PM.jpeg"
                    alt="WhatsApp Image"
                    width={48}
                    height={48}
                    className="h-12 w-auto"
                />

                <div className="hidden md:flex gap-8">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-xl  ${pathname === href
                                    ? "text-primary font-bold border-b-2 pb-1 border-primary "
                                    : "font-semibold"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
<div className="flex items-center gap-5">
    <div className="relative">

                <BsCart4 onClick={() => router.push('/addToCart')} size={40} className="text-primary"/>
                    <p className="absolute left-7 -top-1 bg-green-500 rounded-full text-white px-1">{total}</p>
    </div>
                <RxAvatar size={40} className="text-primary" />
</div>

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
