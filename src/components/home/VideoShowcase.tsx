import { getTranslations } from 'next-intl/server';
import SectionHeading from '@/components/ui/SectionHeading';

/**
 * Factory tour — real production-line videos (muted autoplay loop).
 * Hover pauses the clip so visitors can read the caption.
 */
export default async function VideoShowcase() {
  const t = await getTranslations('homepage');

  const clips = [
    {
      src: '/videos/production-1.mp4',
      poster: '/images/factory/汇莉达工厂实力.jpg',
      caption: 'Huilida Production Base',
      tall: true,
    },
    {
      src: '/videos/production-2.mp4',
      poster: '/images/factory/汇莉达1.jpg',
      caption: 'Production Line',
      tall: false,
    },
    {
      src: '/videos/production-4.mp4',
      poster: '/images/factory/145.jpg',
      caption: 'Quality Control',
      tall: false,
    },
  ];

  return (
    <section className="section-padding section-padding-lg bg-neutral-100">
      <div className="container-page">
        <SectionHeading
          eyebrow="INSIDE THE FACTORY"
          title={t('video_title')}
        />

        <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {/* Large clip */}
          <div className="group relative md:row-span-2 overflow-hidden rounded-3xl bg-forest-dark shadow-lg">
            <video
              src={clips[0].src}
              poster={clips[0].poster}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-gold-300">FACTORY · SHENZHEN</p>
                <p className="mt-2 font-display text-2xl font-semibold text-cream">
                  {clips[0].caption}
                </p>
              </div>
              <span className="hidden sm:flex items-center gap-2 rounded-full bg-forest-dark/70 border border-cream/20 px-4 py-2 text-xs text-cream/80 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
                </span>
                LIVE
              </span>
            </div>
          </div>

          {/* Two stacked clips */}
          {clips.slice(1).map((clip) => (
            <div
              key={clip.src}
              className="group relative overflow-hidden rounded-3xl bg-forest-dark shadow-md aspect-[16/10]"
            >
              <video
                src={clip.src}
                poster={clip.poster}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between">
                <p className="text-base lg:text-lg font-medium text-cream">
                  {clip.caption}
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
