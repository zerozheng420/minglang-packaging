import { clsx } from 'clsx';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx(centered && 'text-center', className)}>
      <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-4 text-lg text-neutral-500 max-w-2xl',
            centered && 'mx-auto text-center',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
