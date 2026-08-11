import CtaSection from "@/components/sections/CtaSection";
import CultureSection from "@/components/sections/CultureSection";
import EconomySection from "@/components/sections/EconomySection";
import HeritageSection from "@/components/sections/HeritageSection";
import HeroSection from "@/components/sections/HeroSection";
import LocationSection from "@/components/sections/LocationSection";
import TourismSection from "@/components/sections/TourismSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="konten">
      <HeroSection />
      <HeritageSection />
      <EconomySection />
      <TourismSection />
      <CultureSection />
      <LocationSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
