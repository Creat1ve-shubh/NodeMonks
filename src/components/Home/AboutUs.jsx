import Card from "../ui/TiltedCard";
import { Josefin_Sans } from "next/font/google";
import srivastava from '../assets/srivastava.jpg';
import shubh from "../assets/shubh.jpg";

const josefin = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "600"],
});

const cardData = [
    {
        imageSrc: srivastava.src,
        altText: "Team Member - Shivansh Srivastava",
        captionText: "Team Member",
        overlayContent: (
            <p className={`${josefin.className} text-2xl text-center p-2`}>
                <span className="underline decoration-wavy decoration-amber-500">Shivansh Srivastava</span> <br />
                <span className="text-lg font-extrabold text-amber-500">Co-Founder</span>
            </p>
        ),
    },
    {
        imageSrc: shubh.src,
        altText: "Team Member - Shubh Shrivastava",
        captionText: "Team Member",
        overlayContent: (
            <p className={`${josefin.className} text-2xl text-center p-2`}>
                <span className="underline decoration-wavy decoration-amber-500">Shubh Shrivastava</span> <br />
                <span className="text-lg font-extrabold text-amber-500">Co-Founder</span>
            </p>
        ),
    }
];

export default function AboutUs() {
    return (
        <div id="about" className="w-screen bg-grid vignette">
            <div className="flex flex-col py-20 items-center justify-center h-screen">
                <div className="text-center text-white underline decoration-wavy mb-10 decoration-amber-500 text-4xl tracking-tight sm:text-6xl">
                    <span className={josefin.className}>The team</span>
                </div>
                <div className="flex flex-wrap justify-center gap-10 px-4">
                    {cardData.map((card, index) => (
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
            </div>
        </div>
    );
}
