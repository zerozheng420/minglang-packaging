import { clsx } from 'clsx';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

/**
 * Dark forest editorial page header used on inner pages.
 * The fixed transparent header sits on top of this band.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  className,
}: PageHeroProps) {
  return (
    <section
      className={clsx(
        'relative overflow-hidden bg-forest-dark pt-36 pb-20 lg:pt-48 lg:pb-28 text-center',
        className,
      )}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[42rem] rounded-full bg-primary-700/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-8 h-56 w-56 rounded-full bg-gold-500/10 blur-[90px]" />

      <div className="relative container-page">
        {eyebrow && (
          <p className="eyebrow text-gold-300 mb-5 animate-fade-in">{eyebrow}</p>
        )}
        <h1 className="font-display font-semibold text-4xl lg:text-6xl text-cream tracking-tight leading-tight animate-slide-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-base lg:text-lg text-neutral-300 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom gold hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
    </section>
  );
}
