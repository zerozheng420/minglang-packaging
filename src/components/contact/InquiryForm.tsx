'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
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
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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

      {/* Status messages */}
      {status === 'success' && (
        <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg text-primary-800 text-sm">
          {t('form_success')}
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {t('form_error')}
        </div>
      )}
    </form>
  );
}
