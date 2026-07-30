'use client';

import { useState, useEffect, useCallback } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { clsx } from 'clsx';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { key: 'nav_products', href: '/products' },
  { key: 'nav_customOem', href: '/custom-oem' },
  { key: 'nav_about', href: '/about' },
  { key: 'nav_contact', href: '/contact' },
  { key: 'nav_faq', href: '/faq' },
] as const;

export default function Header() {
  const t = useTranslations('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300',
        'bg-white/95 backdrop-blur-sm',
        scrolled && 'shadow-sm',
      )}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-primary-700 font-bold text-xl flex-shrink-0"
          >
            明朗包装
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-neutral-600 hover:text-primary-600 font-medium text-sm transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 -mr-2 text-neutral-600 hover:text-primary-600"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={closeMobileMenu}
          />

          {/* Slide-in panel */}
          <div className="fixed right-0 top-0 bottom-0 w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-neutral-100">
              <span className="text-primary-700 font-bold text-lg">
                明朗包装
              </span>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="p-2 text-neutral-500 hover:text-neutral-700"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            <div className="mt-auto p-4 border-t border-neutral-100">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
