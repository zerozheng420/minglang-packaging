import HeroSection from "@/components/home/HeroSection";
import ProductCategories from "@/components/home/ProductCategories";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import IndustriesMarquee from "@/components/home/IndustriesMarquee";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductCategories />
      <AdvantagesSection />
      <AboutSnippet />
      <IndustriesMarquee />
      <CTABanner />
    </>
  );
}
