import { getTranslations } from 'next-intl/server';

const industries = [
  'industries_jewelry',
  'industries_beauty',
  'industries_3c',
  'industries_gift',
  'industries_ecommerce',
  'industries_brand',
] as const;

/** Reverse marquee band — gold serif words on cream, opposite direction to the hero marquee. */
export default async function IndustriesMarquee() {
  const t = await getTranslations('homepage');

  const items = [...industries, ...industries];

  return (
    <section className="border-y border-neutral-200/70 bg-cream py-7 lg:py-9 overflow-hidden">
      <div className="flex w-max animate-marquee-reverse items-center gap-0">
        {items.map((key, i) => (
          <div key={i} className="flex items-center">
            <span className="whitespace-nowrap px-7 font-display text-2xl lg:text-3xl font-medium italic tracking-tight text-primary-800">
              {t(key as never)}
            </span>
            <span className="text-gold-400 text-base">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
