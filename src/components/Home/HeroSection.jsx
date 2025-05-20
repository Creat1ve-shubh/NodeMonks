"use client"
import { useState, useEffect } from "react";
import { Pinyon_Script } from 'next/font/google';
import SplashScreen from "../SplashScreen";

const pinyon = Pinyon_Script({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export default function HeroSection() {
    const [showSplash, setShowSplash] = useState(true);
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateOut(true); // Start the slide-up animation
            setTimeout(() => setShowSplash(false), 1000); // Remove splash screen after animation
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-screen w-screen flex justify-center items-center overflow-hidden relative">
            {showSplash && (
                <SplashScreen splashOut={animateOut} />
            )}
            <iframe
                src="https://my.spline.design/retrofuturismbganimation-P0hJtJ473vdyrELeB6VgVrK9/"
                width="120%"
                height="120%"
            ></iframe>
            <span className="absolute text-3xl lg:text-7xl max-w-2/3 font-semibold text-center">
                Turning bold ideas into <br />
                <span className={pinyon.className}>Pixel-Perfect Experiences </span>, crafted for impact and engineered for{" "}
                <span className={pinyon.className}>delight</span>.
            </span>
        </div>
    );
}