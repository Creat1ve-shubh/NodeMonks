import { Pinyon_Script } from 'next/font/google'
const pinyon = Pinyon_Script({
    weight: '400',
    subsets: ['latin'],
})
export default function HeroSection() {
    return (
        <div className="h-screen w-screen flex justify-center items-center overflow-x-hidden overflow-y-hidden ">
            <iframe src='https://my.spline.design/retrofuturismbganimation-P0hJtJ473vdyrELeB6VgVrK9/' width='120%' height='120%'></iframe>
            <span className="absolute text-3xl lg:text-7xl max-w-2/3 font-semibold text-center">
                Turning bold ideas into <br /><span className={pinyon.className} >Pixel-Perfect Experiences </span>, crafted for impact and engineered for <span className={pinyon.className}>delight</span>.
            </span>
        </div>
    )
}