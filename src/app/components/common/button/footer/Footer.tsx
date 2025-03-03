"use client"
import { navLinks } from "@/app/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
    const pathname = usePathname();
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-[#073B3A] p-6">
                <div className="flex items-center justify-center gap-12">
                    <FaFacebook size={50} className="text-white" />
                    <FaSquareInstagram size={50} className="text-white" />
                    <FaLinkedin size={50} className="text-white" />
                </div>
                <div className="flex flex-col gap-6 py-6 items-center">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className={pathname === href ? "text-primary font-bold text-xl" : "text-xl text-white font-semibold"}>
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}