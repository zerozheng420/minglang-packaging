import { clsx } from 'clsx';
import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  variant?: 'default' | 'green' | 'gold';
  className?: string;
};

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-neutral-100 text-neutral-700',
  green: 'bg-primary-100 text-primary-800 ring-1 ring-primary-200',
  gold: 'bg-gold-100 text-gold-800 ring-1 ring-gold-300',
};

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'px-3 py-1 rounded-full text-xs font-medium inline-block',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
