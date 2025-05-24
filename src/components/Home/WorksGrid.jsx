import { Josefin_Sans } from "next/font/google"
import mockup from "../assets/mockup.jpg";
import top from "../assets/top.jpg";


const josefin = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "600"],
})

export default function Works() {
    return (
        <div id="work">
            <div className="mx-auto max-w-2xl mt-10 px-6 py-20 lg:max-w-7xl lg:px-8">
                <div className="text-center text-white underline decoration-wavy decoration-amber-500 text-4xl tracking-tight sm:text-6xl">
                    <span className={josefin.className}>Your next favourite product</span>
                </div>

                <div className="mt-10 grid gap-4 sm:my-16 lg:grid-cols-3 lg:grid-rows-2">
                    {/* Card 1 */}
                    <div className="relative lg:row-span-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl  overflow-hidden">
                        <div className="absolute inset-px rounded-lg bg-orange-600 opacity-80 lg:rounded-l-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-2xl font-semibold tracking-tight text-white max-lg:text-center">
                                    Effortless Scanning & Labeling
                                </p>
                                <p className="mt-2 max-w-lg text-lg space text-orange-100  max-lg:text-center">
                                    No more manual entry! Scan items instantly and generate smart labels with embedded data.
                                    Our intuitive interface ensures even non-technical staff can label and register inventory with ease.
                                </p>

                            </div>
                            <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <img
                                        className="size-full object-cover object-top"
                                        src={mockup.src}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative max-lg:row-start-1 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl   overflow-hidden">
                        <div className="absolute inset-px rounded-lg bg-zinc-900 max-lg:rounded-t-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-2xl font-semibold tracking-tight text-orange-400 max-lg:text-center">Real-Time Tracking & Insights</p>
                                <p className="mt-2 max-w-lg text-lg text-gray-300 max-lg:text-center">
                                    Experience blazing-fast inventory updates and track product movements in real time. Stay informed with dynamic dashboards that reduce stock mismatches and improve accuracy by up to 30%
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                <img
                                    className="w-full max-lg:max-w-xs"
                                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl   overflow-hidden">
                        <div className="absolute inset-px rounded-lg bg-amber-200"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 max-lg:text-center">Expiry Management & Smart Alerts</p>
                                <p className="mt-2 max-w-lg text-lg text-gray-700 max-lg:text-center">
                                    Automatically monitor expiry dates and get timely notifications when products are near expiration. Reduce waste, manage returns, and ensure compliance with minimal manual effort.
                                </p>
                            </div>
                            <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                <img
                                    className="h-[min(152px,40cqw)] object-cover"
                                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative lg:row-span-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl   overflow-hidden">
                        <div className="absolute inset-px rounded-lg bg-amber-500 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 max-lg:text-center">Robust Desktop Experience</p>
                                <p className="mt-2 max-w-lg text-lg text-gray-100 max-lg:text-center">
                                    Optimized for desktop workflows, our system integrates seamlessly into your operational setup. From bulk uploads to detailed reports, get everything you need in one powerful interface.
                                </p>
                            </div>
                            <div className="relative min-h-120 w-full grow">
                                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                            <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                Inventory
                                            </div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">Home</div>
                                        </div>
                                    </div>
                                    <img className="" alt="" height="500%" width="100%"
                                        src={top.src}></img>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                    </div>
                </div>

            </div>

        </div >
    )
}
