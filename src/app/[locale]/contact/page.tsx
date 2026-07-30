import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/contact/InquiryForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  return {
    title: `${t('title')} - ${tc('siteName')}`,
    description: t('form_title'),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("contact");
  const tCommon = await getTranslations("common");

  return (
    <div className="section-padding">
      <div className="container-page">
        <SectionHeading title={t("title")} centered />

        <div className="mt-12 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">
              {t("form_title")}
            </h2>
            <InquiryForm />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">
              {t("info_title")}
            </h2>
            <div className="space-y-4">
              <ContactCard
                icon={LocationIcon}
                label={tCommon("footer_address")}
                value={tCommon("contact_address_value")}
              />
              <ContactCard
                icon={PhoneIcon}
                label={tCommon("footer_phone")}
                value={tCommon("contact_phone_value")}
              />
              <ContactCard
                icon={EmailIcon}
                label={tCommon("footer_email")}
                value={tCommon("contact_email_value")}
              />
              <ContactCard
                icon={ChatIcon}
                label={tCommon("footer_wechat")}
                value={tCommon("contact_wechat_value")}
              />
              <ContactCard
                icon={ChatIcon}
                label={tCommon("footer_whatsapp")}
                value="+86 138-xxxx-xxxx"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl">
      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary-600" />
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-500">{label}</p>
        <p className="text-neutral-800">{value}</p>
      </div>
    </div>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
