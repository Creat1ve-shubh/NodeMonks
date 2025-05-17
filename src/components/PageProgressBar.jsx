'use client';
import { useEffect, useState } from 'react';

export default function PageProgressBar() {
    const [width, setWidth] = useState(0);

    const scrollHeight = () => {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.clientHeight;
        const docHeight = document.documentElement.scrollHeight;

        const totalDocScrollLength = docHeight - windowHeight;
        const scrollProgress = (scrollTop / totalDocScrollLength) * 100;

        setWidth(scrollProgress);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHeight);
        return () => window.removeEventListener('scroll', scrollHeight);
    }, []);

    return (
        <div className="fixed top-0 left-0 h-1 w-full bg-black z-50  ">
            <div
                className="h-full bg-gradient-to-r from-orange-700 to-yellow-500 transition-all duration-300 ease-out"
                style={{ width: `${width}%` }}
            />
        </div>
    );
}