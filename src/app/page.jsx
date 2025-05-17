import AboutUs from "@/components/Home/AboutUs";
import ContactUs from "@/components/Home/ContactUs";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <HeroSection />
      <AboutUs />
      <ContactUs />
    </div>
  )
}