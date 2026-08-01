'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  productInterest: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const productInterestOptions = [
  'Grey Velvet Bags',
  'Short Plush Bags',
  'Satin Bags',
  'Canvas Bags',
  'Custom OEM',
  'Other',
] as const;

export default function InquiryForm() {
  const t = useTranslations('contact');
  const ct = useTranslations('common');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        productInterest: '',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  const inputClasses =
    'w-full px-5 py-3.5 border border-neutral-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-all text-neutral-800 placeholder:text-neutral-400 text-sm';

  return (
    <div className="relative rounded-3xl border border-neutral-200 bg-white p-7 lg:p-9 shadow-lg shadow-neutral-900/5">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-primary-100 ring-1 ring-primary-200 flex items-center justify-center mb-6"
            >
              <svg className="w-10 h-10 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="font-display text-2xl font-semibold text-neutral-800 mb-2">
              {t('form_success_title')}
            </h3>
            <p className="text-neutral-600 mb-8">{t('form_success')}</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-8 py-3.5 text-white font-semibold transition-all hover:bg-primary-900 hover:-translate-y-0.5"
            >
              {t('form_back_home')}
              <span>→</span>
            </Link>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                {t('form_name')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t('form_placeholder_name')}
                className={inputClasses}
              />
            </div>

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                  {t('form_email')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('form_placeholder_email')}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                  {t('form_phone')}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('form_placeholder_phone')}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Company + Interest */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1.5">
                  {t('form_company')}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('form_placeholder_company')}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="productInterest" className="block text-sm font-medium text-neutral-700 mb-1.5">
                  {t('form_productInterest')}
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">-- {ct('button_learnMore')} --</option>
                  {productInterestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                {t('form_message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder={t('form_placeholder_message')}
                className={inputClasses}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-9 py-4 font-semibold text-white shadow-lg shadow-gold-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === 'submitting' ? ct('loading') : t('form_submit')}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>

            {/* Error message */}
            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                {t('form_error')}
              </div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
