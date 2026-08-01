import { clsx } from 'clsx';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  centered = true,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx(centered && 'text-center', className)}>
      {eyebrow && (
        <p
          className={clsx(
            'eyebrow mb-4 flex items-center gap-3',
            centered && 'justify-center',
            dark ? 'text-gold-300' : 'text-gold-600',
          )}
        >
          <span className={clsx('h-px w-8', dark ? 'bg-gold-300/60' : 'bg-gold-500/60')} />
          {eyebrow}
          <span className={clsx('h-px w-8', dark ? 'bg-gold-300/60' : 'bg-gold-500/60')} />
        </p>
      )}
      <h2
        className={clsx(
          'font-display font-semibold text-3xl lg:text-5xl leading-tight tracking-tight',
          dark ? 'text-cream' : 'text-neutral-900',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-5 text-base lg:text-lg max-w-2xl leading-relaxed',
            dark ? 'text-neutral-300' : 'text-neutral-500',
            centered && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
