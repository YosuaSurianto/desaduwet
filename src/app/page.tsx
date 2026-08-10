import CtaSection from "@/components/sections/CtaSection";
import HeritageSection from "@/components/sections/HeritageSection";
import HeroSection from "@/components/sections/HeroSection";
import TourismSection from "@/components/sections/TourismSection";
import UmkmSection from "@/components/sections/UmkmSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="konten">
      <HeroSection />
      <HeritageSection />
      <TourismSection />
      <UmkmSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
