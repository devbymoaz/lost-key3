import Image from "next/image";

export default function RegistrationProcess() {
    const data = [
        { title: "1. Lost Key", description: "Unsere kostenlose OLAF-App für IOS und Android herunterladen. Kein Abo notwendig!" },
        { title: "2. Register", description: "Register the QR code in the app. No data is required for this." },
        { title: "3. Find it again!", description: "The finder can now contact you directly in the chat by scanning the QR code. 100% anonymous" },
    ];

    return (
        <div className="relative w-full h-screen flex flex-col lg:flex-row">
            <Image 
                src="/pexels-busra-altin-60338887-30780540.jpg" 
                alt="Background" 
                fill
                className="object-cover -z-10"
            />

            <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full bg-[#E0E4E5]/90 flex flex-col items-center justify-evenly p-6 md:p-10">
                {data.map((val, ind) => (
                    <div key={ind} className="text-black max-w-lg space-y-2 text-center lg:text-left">
                        <h1 className="text-2xl md:text-4xl font-bold text-primary">{val.title}</h1>
                        <p className="text-lg">{val.description}</p>
                    </div>
                ))}
            </div>

            <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center lg:justify-start p-6 md:p-10">
                <div className="text-white text-center lg:text-left">
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                        In just <br /> 20 seconds
                    </h2>
                </div>
            </div>
        </div>
    );
}
