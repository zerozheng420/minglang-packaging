import HeroCarousel from "@/components/home/HeroCarousel";
import ProductCategories from "@/components/home/ProductCategories";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import VideoShowcase from "@/components/home/VideoShowcase";
import AboutSnippet from "@/components/home/AboutSnippet";
import IndustriesMarquee from "@/components/home/IndustriesMarquee";
import CTABanner from "@/components/home/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
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
      <HeroCarousel />
      <ScrollReveal direction="up" delay={0}>
        <ProductCategories />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <AdvantagesSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.15}>
        <VideoShowcase />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.2}>
        <AboutSnippet />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.3}>
        <IndustriesMarquee />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.4}>
        <CTABanner />
      </ScrollReveal>
    </>
  );
}
