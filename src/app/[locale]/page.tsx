import HeroSection from "@/components/home/HeroSection";
import ProductCategories from "@/components/home/ProductCategories";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import IndustriesMarquee from "@/components/home/IndustriesMarquee";
import CTABanner from "@/components/home/CTABanner";
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'homepage' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  return {
    title: `${t('hero_title')} - ${tc('siteName')}`,
    description: t('hero_subtitle'),
    openGraph: {
      title: `${t('hero_title')} - ${tc('siteName')}`,
      description: t('hero_subtitle'),
      type: 'website',
    },
  };
}

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
