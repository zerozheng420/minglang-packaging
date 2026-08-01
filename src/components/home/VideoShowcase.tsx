import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { BLUR_PLACEHOLDER } from '@/lib/placeholder';

const shots = [
  {
    src: '/images/factory/汇莉达工厂实力.jpg',
    caption: 'Huilida Production Base',
    tall: true,
  },
  {
    src: '/images/factory/汇莉达1.jpg',
    caption: 'Production Line',
    tall: false,
  },
  {
    src: '/images/factory/145.jpg',
    caption: 'Quality Control',
    tall: false,
  },
];

export default async function VideoShowcase() {
  const t = await getTranslations('homepage');

  return (
    <section className="section-padding section-padding-lg bg-neutral-100">
      <div className="container-page">
        <SectionHeading
          eyebrow="INSIDE THE FACTORY"
          title={t('video_title')}
        />

        <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {/* Large shot */}
          <div className="group relative md:row-span-2 overflow-hidden rounded-3xl bg-neutral-900 shadow-lg">
            <div className="absolute inset-0">
              <Image
                src={shots[0].src}
                alt={shots[0].caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
            <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
              <p className="eyebrow text-gold-300">FACTORY · SHENZHEN</p>
              <p className="mt-2 font-display text-2xl font-semibold text-cream">
                {shots[0].caption}
              </p>
            </div>
          </div>

          {/* Two stacked shots */}
          {shots.slice(1).map((shot) => (
            <div
              key={shot.src}
              className="group relative overflow-hidden rounded-3xl bg-neutral-900 shadow-md aspect-[16/10]"
            >
              <Image
                src={shot.src}
                alt={shot.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between">
                <p className="text-base lg:text-lg font-medium text-cream">
                  {shot.caption}
                </p>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
