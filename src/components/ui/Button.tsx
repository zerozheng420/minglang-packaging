import Link from 'next/link';
import { clsx } from 'clsx';
import type { ComponentProps, ReactNode } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
} & ComponentProps<'button'>;

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-primary-700 text-cream hover:bg-primary-800 shadow-sm shadow-primary-900/20',
  secondary:
    'bg-white border border-primary-700 text-primary-800 hover:bg-primary-50',
  accent:
    'bg-gold-500 text-white hover:bg-gold-600 shadow-sm shadow-gold-900/20',
  gold: 'bg-gold-500 text-white hover:bg-gold-600',
  outline:
    'border border-neutral-300 text-neutral-700 hover:border-gold-500 hover:text-gold-600',
  ghost: 'text-neutral-600 hover:text-gold-600 hover:bg-gold-50',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-9 py-4 text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(
    'rounded-full font-semibold tracking-wide transition-all duration-300 inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
