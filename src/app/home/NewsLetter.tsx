'use client';

import { useState } from 'react';
import Button from '../components/common/button/Button';
import Image from 'next/image';
import { shopItems } from '../utils/data';
import ShopCard from '../components/sections/ShopCard';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    return (
        <>
            <div className="flex flex-col items-center text-center p-10 bg-white">
                <h2 className="text-4xl font-bold text-primary">Join now</h2>
                <p className="mt-2 max-w-lg">
                    Subscribe to our newsletter and you will receive the most important news about the Lost Key&reg;
                </p>

                {/* Email Input */}
                <div className="mt-4 flex w-full max-w-md">
                    <Button className="bg-primary text-white px-5 rounded-r-lg">→</Button>
                    <input
                        type="email"
                        placeholder="Email *"
                        className="flex-1 p-3 border focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Known From Section */}
                <h3 className="mt-10 text-4xl font-bold text-[#808080]">KNOWN FROM</h3>
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                    <Image src="/Bayern3_g.png" alt="Bayern 3" width={120} height={40} />
                    <Image src="/ProSieben_Taff_g.png" alt="Taff" width={120} height={40} />
                    <Image src="/Nuernberger_Nachrichten_g.png" alt="Nürnberger Nachrichten" width={120} height={40} />
                    <Image src="/Weser_Report_g.png" alt="Weser Report" width={120} height={40} />
                    <Image src="/Bayern3_g.png" alt="Bayern 3" width={120} height={40} />
                    <Image src="/ProSieben_Taff_g.png" alt="Taff" width={120} height={40} />
                </div>

                {/* Code Entry Section */}
                <p className="mt-10 text-lg font-semibold text-primary">
                    You found a code and don&apos;t know who it belongs to?
                </p>
                <p className="max-w-lg">
                    Write directly to the owner anonymously and help him get his valuables back.
                    Good karma is guaranteed for you in any case.
                </p>

                {/* Code Input */}
                <div className="mt-4 flex w-full max-w-md">
                    <Button className="bg-primary text-white px-5 rounded-r-lg">START CHAT</Button>
                    <input
                        type="text"
                        placeholder="Enter code e.g. X6U95"
                        className="flex-1 p-3 border focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>
            </div>
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-4xl text-primary font-bold text-center mb-6">Best Sellers</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {shopItems.map((item, index) => (
                        <ShopCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
