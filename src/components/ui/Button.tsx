import Link from 'next/link';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
} & ComponentProps<'button'>;

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600',
  secondary:
    'bg-white border border-primary-500 text-primary-700 hover:bg-primary-50',
  accent: 'bg-accent text-white hover:bg-accent-hover',
  outline:
    'border border-neutral-300 text-neutral-700 hover:border-primary-500 hover:text-primary-600',
  ghost:
    'text-neutral-600 hover:text-primary-600 hover:bg-primary-50',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
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
    'rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center gap-2',
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
