import AboutUs from "@/components/Home/AboutUs";
import ComingSoon from "@/components/Home/ComingSoon";
import ContactUs from "@/components/Home/ContactUs";
import HeroSection from "@/components/Home/HeroSection";
import Works from "@/components/Home/WorksGrid";

export default function Home() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <HeroSection />
      <ComingSoon />

      <AboutUs />
      <ContactUs />
    </div>
  )
}