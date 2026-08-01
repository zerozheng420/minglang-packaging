'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const light = !scrolled && !mobileMenuOpen;

  return (
    <header
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-500',
        light
          ? 'bg-transparent'
          : 'bg-cream/90 backdrop-blur-md shadow-sm shadow-neutral-900/5',
      )}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 flex-shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 font-display text-lg font-bold text-white shadow-sm shadow-gold-900/30">
              M
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={clsx(
                  'font-display font-semibold text-xl tracking-tight transition-colors duration-300',
                  light ? 'text-cream' : 'text-primary-900',
                )}
              >
                明朗包装
              </span>
              <span
                className={clsx(
                  'eyebrow mt-1 text-[0.6rem] transition-colors duration-300',
                  light ? 'text-gold-300' : 'text-gold-600',
                )}
              >
                MINGLANG PACKAGING
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={clsx(
                  'group relative text-sm font-medium tracking-wide transition-colors duration-300',
                  light ? 'text-cream/85 hover:text-white' : 'text-neutral-600 hover:text-primary-800',
                )}
              >
                {t(link.key)}
                <span
                  className={clsx(
                    'absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100',
                    light ? 'bg-gold-300' : 'bg-gold-500',
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <LanguageSwitcher light={light} />
            <Link
              href="/contact"
              className={clsx(
                'rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg',
                light
                  ? 'bg-gold-500 text-white hover:bg-gold-600 shadow-sm shadow-gold-900/30'
                  : 'bg-primary-800 text-cream hover:bg-primary-900',
              )}
            >
              {t('button_requestQuote')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={clsx(
              'lg:hidden p-2 -mr-2 transition-colors',
              light ? 'text-cream' : 'text-neutral-700',
            )}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-forest-dark/60 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-cream shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-neutral-200/60">
                <span className="font-display font-semibold text-xl text-primary-900">
                  明朗包装
                </span>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="p-2 text-neutral-500 hover:text-neutral-800"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col p-5 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="group flex items-center justify-between px-4 py-3.5 text-neutral-700 font-medium rounded-xl transition-colors hover:bg-gold-50 hover:text-gold-700"
                    >
                      {t(link.key)}
                      <span className="text-gold-400 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto p-5 border-t border-neutral-200/60 space-y-4">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block rounded-full bg-gold-500 text-white text-center px-6 py-3.5 font-semibold hover:bg-gold-600 transition-colors"
                >
                  {t('button_requestQuote')}
                </Link>
                <LanguageSwitcher />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
