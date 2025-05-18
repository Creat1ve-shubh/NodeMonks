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
        overlayContent: <p className={`${josefin.className} text-2xl text-center p-2`}> <span className="underline decoration-wavy decoration-amber-500">Vansh Tandon</span> <br /><span className="text-lg font-extrabold text-amber-500" >CEO</span></p>
    },
    {
        imageSrc: sharma.src,
        altText: "Kendrick Lamar - GNX Album Cover",
        captionText: "Kendrick Lamar - GNX",
        overlayContent: <p className={`${josefin.className} text-2xl text-center p-2`}> <span className="underline decoration-wavy decoration-amber-500">Shivansh Sharma</span> <br /><span className="text-lg font-extrabold text-amber-500" >CLO</span></p>
    },
    {
        imageSrc: pegia.src,
        altText: "Kendrick Lamar - GNX Album Cover",
        captionText: "Kendrick Lamar - GNX",
        overlayContent: <p className={`${josefin.className} text-2xl text-center p-2`}> <span className="underline decoration-wavy decoration-amber-500">Shreyash Pagia</span> <br /><span className="text-lg font-extrabold text-amber-500" >COO</span></p>
    },
    {
        imageSrc: iqbal.src,
        altText: "Kendrick Lamar - GNX Album Cover",
        captionText: "Kendrick Lamar - GNX",
        overlayContent: <p className={`${josefin.className} text-2xl text-center p-2`}> <span className="underline decoration-wavy decoration-amber-500">Shivansh Srivastava</span> <br /><span className="text-lg font-extrabold text-amber-500" >CTO</span></p>
    },
    {
        imageSrc: shubh.src,
        altText: "Kendrick Lamar - GNX Album Cover",
        captionText: "Kendrick Lamar - GNX",
        overlayContent: <p className={`${josefin.className} text-2xl text-center p-2`}> <span className="underline decoration-wavy decoration-amber-500">Shubh Shrivastava</span> <br /><span className="text-lg font-extrabold text-amber-500" >CTO</span></p>
    }
];

export default function AboutUs() {
    return (
        <div id="about" className=" w-screen bg-grid vignette">
            <div className="flex flex-col py-20 items-center justify-center h-fit">
                <div className="text-center text-white underline decoration-wavy mb-10 decoration-amber-500 text-4xl tracking-tight sm:text-6xl">
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
