import { Abril_Fatface } from "next/font/google"
import Link from "next/link";

const abril_fatface = Abril_Fatface({
    weight: "400",
    subsets: ["latin"],
});
export default function Navbar() {
    return (
        <div className="w-screen h-20 z-2 bg-transparent flex justify-between items-center px-8 backdrop-blur-sm fixed top-0 left-0">
            <div>
                <p className={`${abril_fatface.className} underline decoration-wavy decoration-amber-500 text-3xl `} >NodeMonks</p>
            </div>
            <div className="w-fit flex gap-4 justify-between items-center">
                <Link href={'#work'} className="bg-zinc-800 transition-all duration-300 hover:bg-zinc-100 hover:text-black py-2 px-4 rounded-full" >Work</Link>
                <Link href={"#about"} className="bg-zinc-800 transition-all duration-300 hover:bg-zinc-100 hover:text-black py-2 px-4 rounded-full" >About Us</Link>
                <Link href={"#contact"} className="bg-zinc-800 transition-all duration-300 hover:bg-zinc-100 hover:text-black py-2 px-4 rounded-full">Contact Us</Link>
            </div>
        </div>
    )
}