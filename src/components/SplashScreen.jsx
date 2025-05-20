import { Abril_Fatface } from "next/font/google";
const abril_fatface = Abril_Fatface({
    weight: "400",
    subsets: ["latin"],
});
export default function SplashScreen({ splashOut }) {
    return (
        <div
            className={`fixed inset-0 bg-[#0e0e0e] text-white flex flex-col gap-8 justify-center items-center text-3xl font-bold z-50 transition-all duration-1000 ${splashOut ? "-translate-y-full " : "translate-y-0 "
                }`}>
            <h1 className={`${abril_fatface.className} text-4xl font-bold text-white underline decoration-amber-500 decoration-wavy `}>NodeMonks</h1>
            <div className="mt-4 w-8 h-8 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>
    );
}