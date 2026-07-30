import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';

const videos = [
  { src: '/videos/production-1.mp4', poster: '/images/factory/汇莉达工厂实力.jpg' },
  { src: '/videos/production-2.mp4', poster: '/images/factory/汇莉达1.jpg' },
];

export default async function VideoShowcase() {
  const t = await getTranslations('homepage');

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-page">
        <SectionHeading title={t('video_title')} centered />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer bg-neutral-200 shadow-md"
            >
              <Image
                src={video.poster}
                alt={`Factory tour video ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Dark overlay + play button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary-500/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <svg
                    className="w-6 h-6 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
