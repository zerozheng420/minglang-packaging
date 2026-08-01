import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
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
    <div className="bg-cream">
      <PageHero
        eyebrow="GET IN TOUCH"
        title={t("title")}
        subtitle={t("form_title")}
      />

      <div className="section-padding section-padding-lg">
        <div className="container-page">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-neutral-900 mb-7">
                {t("form_title")}
              </h2>
              <InquiryForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-neutral-900 mb-7">
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

              {/* Response promise card */}
              <div className="mt-6 rounded-2xl bg-forest-dark p-7 text-cream overflow-hidden relative">
                <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gold-500/15 blur-[50px]" />
                <p className="eyebrow text-gold-300 !text-[0.65rem]">RESPONSE</p>
                <p className="mt-3 font-display text-lg leading-relaxed">
                  {t("form_response_title")}
                </p>
                <p className="mt-1 text-sm text-neutral-300">
                  {t("form_response_desc")}
                </p>
              </div>
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
    <div className="group flex items-start gap-5 rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-lg">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600 ring-1 ring-gold-300 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="eyebrow text-[0.65rem] text-neutral-400">{label}</p>
        <p className="mt-1.5 break-words text-neutral-800 font-medium">{value}</p>
      </div>
    </div>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
