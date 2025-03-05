import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export default function ShopSection() {


    return (
        <div className="relative w-full h-[60vh] flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 bg-[#E0E4E5] flex flex-col items-center justify-evenly p-6 md:p-10">
            <h1 className="text-2xl md:text-5xl font-extrabold text-primary text-center">Secure your <br/> treasures</h1>
            <p>Free shipping from 20€</p>
            <FaChevronDown size={30}/>
            <p className='text-center'>Save 10% when you buy 3 products or <br /> more</p>
            <FaChevronDown size={30}/>
            <p className='text-center'>Save 20% when you buy 5 products or <br /> more</p>
            </div>

            <div className="relative w-full lg:w-1/2 h-80 lg:h-full">
                <Image 
                    src="/a8f8c3_c741f38b46594d8ba078058444f6dfef~mv2 (1).jpg" 
                    alt="Background"
                    fill
                    className=""
                />
            </div>
        </div>
    );
}
