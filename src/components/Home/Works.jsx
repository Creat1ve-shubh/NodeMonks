import { Josefin_Sans } from "next/font/google";
const jose
export default function Works() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                    Everything you need to deploy your app
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    {[
                        {
                            title: "Mobile friendly",
                            description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
                            imgSrc: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                        },
                        {
                            title: "Performance",
                            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
                            imgSrc: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                        },
                        {
                            title: "Security",
                            description: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.",
                            imgSrc: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                        },
                        {
                            title: "Powerful APIs",
                            description: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.",
                            imgSrc: null // Placeholder for image source
                        }
                    ].map((item, index) => (
                        <div key={index} className={`relative ${index === 0 || index === 3 ? 'lg:row-span-2' : ''} ${index === 2 ? 'lg:col-start-2 lg:row-start-2' : ''}`}>
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{item.title}</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">{item.description}</p>
                                </div>
                                {item.imgSrc && (
                                    <div className="relative min-h-120 w-full grow">
                                        <img className="h-[min(152px,40cqw)] object-cover" src={item.imgSrc} alt={item.title} />
                                    </div>
                                )}
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}