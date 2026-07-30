'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import Button from '@/components/ui/Button';

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
    'w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-neutral-800 placeholder:text-neutral-400';

  return (
    <div className="relative">
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
              className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
            >
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-2">提交成功！</h3>
            <p className="text-neutral-600 mb-8">{t('form_success')}</p>
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors">
              返回首页
            </Link>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-neutral-700 mb-1.5"
        >
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

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-700 mb-1.5"
        >
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

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-neutral-700 mb-1.5"
        >
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

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-neutral-700 mb-1.5"
        >
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

      {/* Product Interest */}
      <div>
        <label
          htmlFor="productInterest"
          className="block text-sm font-medium text-neutral-700 mb-1.5"
        >
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

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-700 mb-1.5"
        >
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
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto"
      >
        {status === 'submitting' ? ct('loading') : t('form_submit')}
      </Button>

      {/* Error message */}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {t('form_error')}
        </div>
      )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
