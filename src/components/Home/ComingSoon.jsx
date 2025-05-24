"use client";
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Josefin_Sans } from 'next/font/google';
import { Pinyon_Script } from 'next/font/google';

const pinyon = Pinyon_Script({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});
const josefin = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '600'],
});

const comingSoon = () => {
    return (
        <>
            <div className="py-[30vh]">
                <div className="text-center text-white underline decoration-wavy decoration-amber-500 text-4xl tracking-tight sm:text-6xl">
                    <span className={josefin.className}>Prototype Phase: Please Stand By.</span>
                </div>
                <div className='flex flex-col text-center blur-md items-center justify-center'>
                    <DotLottieReact
                        src="https://lottie.host/4651317a-d899-46f9-b9a7-20ed92de6bc7/tlOtDdsGXs.lottie"
                        style={{ width: '50%', height: '60vh', marginTop: '2rem' }}
                        loop
                        autoplay
                    />

                </div>
                <h2 className='text-amber-400 text-6xl text-center'><span className={josefin.className}> Coming Soon!</span>
                </h2>
            </div>
        </>
    );
};

export default comingSoon;