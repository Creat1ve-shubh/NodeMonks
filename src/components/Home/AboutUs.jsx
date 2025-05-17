import Card from "../ui/TiltedCard";
import { Josefin_Sans } from "next/font/google";
import vansh from "../assets/vansh.jpg";
import sharma from "../assets/sharma.jpg";
import pegia from "../assets/pegia.jpg";
import shubh from "../assets/shubh.jpg";
import iqbal from "../assets/iqbal.jpg";


const josefin = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "600"],
});

const cardData = [
    {
        imageSrc: vansh.src,
        altText: "Kendrick Lamar - GNX Album Cover",
        captionText: "Kendrick Lamar - GNX",
        overlayContent: <p className="text-black bg-rose-500">Vansh Tandon - CEO</p>
    },
    {
        imageSrc: sharma.src,
        altText: "Kendrick Lamar - GNX Album Cover",
        captionText: "Kendrick Lamar - GNX",
        overlayContent: <p className="text-black bg-rose-500">Shivansh Sharma - CLO</p>
    },
    {
        imageSrc: pegia.src,
        altText: "Kendrick Lamar - GNX Album Cover",
        captionText: "Kendrick Lamar - GNX",
        overlayContent: <p className="text-black bg-rose-500">Shreyash Pegia - COO</p>
    },
    {
        imageSrc: iqbal.src,
        altText: "Kendrick Lamar - GNX Album Cover",
        captionText: "Kendrick Lamar - GNX",
        overlayContent: <p className="text-black bg-rose-500">Shivansh Srivastava - CTO</p>
    },
    {
        imageSrc: shubh.src,
        altText: "Kendrick Lamar - GNX Album Cover",
        captionText: "Kendrick Lamar - GNX",
        overlayContent: <p className="text-black bg-rose-500">Shubh Shrivastava - Father</p>
    }
];

export default function AboutUs() {
    return (
        <div className="relative bg-grid vignette">
            <div className="flex flex-col my-20 items-center justify-center h-screen">
                <div className="text-center text-white md:underline decoration-wavy mb-10 decoration-amber-500 text-4xl tracking-tight sm:text-6xl">
                    <span className={josefin.className}>The team</span>
                </div>
                {/* Row 1 (3 cards) */}
                <div className="flex justify-center gap-10 flex-wrap mb-10">
                    {cardData.slice(0, 3).map((card, index) => (
                        <Card
                            key={index}
                            imageSrc={card.imageSrc}
                            altText={card.altText}
                            captionText={card.captionText}
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={card.overlayContent}
                        />
                    ))}
                </div>

                {/* Row 2 (2 cards centered) */}
                <div className="flex justify-center gap-10 flex-wrap">
                    {cardData.slice(3, 5).map((card, index) => (
                        <Card
                            key={index + 3}
                            imageSrc={card.imageSrc}
                            altText={card.altText}
                            captionText={card.captionText}
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={card.overlayContent}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
