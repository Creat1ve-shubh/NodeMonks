import { Abril_Fatface } from "next/font/google"
import Link from "next/link";

const abril_fatface = Abril_Fatface({
    weight: "400",
    subsets: ["latin"],
});
export default function Navbar() {
    return (
        <div className="w-screen max-sm:h-fit max-sm:py-5 h-20 z-2 bg-linear-to-b from-black to-transparent  flex max-sm:flex-col max-sm:gap-4 justify-between items-center px-8 backdrop-blur-sm fixed top-0 left-0">
            <div>
                <Link href={"/"} className={`${abril_fatface.className} underline decoration-wavy decoration-amber-500 text-3xl `} >NodeMonks</Link>
            </div>
            <div className="max-sm:hidden w-fit flex gap-4 justify-between items-center">
                <Link href={'#work'} className="bg-zinc-800 transition-all duration-100 hover:bg-white  hover:text-black py-1 px-4 rounded-full" >Work</Link>
                <Link href={"#about"} className="bg-zinc-800 transition-all duration-100 hover:bg-white  hover:text-black py-1 px-4 rounded-full" >About Us</Link>
                <Link href={"#contact"} className="bg-zinc-800 transition-all duration-100 hover:bg-white  hover:text-black py-1 px-4 rounded-full">Contact Us</Link>
            </div>
        </div>
    )
}