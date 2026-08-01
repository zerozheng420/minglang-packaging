import { getTranslations } from 'next-intl/server';

const words = [
  'marquee_odm',
  'marquee_oem',
  'industries_jewelry',
  'industries_beauty',
  'industries_3c',
  'industries_gift',
  'marquee_moq',
  'marquee_eco',
  'marquee_20years',
] as const;

/** Gold band marquee right below the hero — brand capability words. */
export default async function BrandMarquee() {
  const t = await getTranslations('homepage');

  // Double the list so the -50% translateX loop is seamless
  const items = [...words, ...words];

  return (
    <div className="relative overflow-hidden bg-gold-500 py-4 lg:py-5">
      <div className="flex w-max animate-marquee gap-0">
        {items.map((key, i) => (
          <div key={i} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-display text-lg lg:text-xl font-medium tracking-wide text-forest-dark">
              {t(key as never)}
            </span>
            <span className="text-forest-dark/60 text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
