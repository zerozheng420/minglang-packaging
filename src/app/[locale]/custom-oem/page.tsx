import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [1, 2, 3, 4, 5] as const;

const materials = [
  { key: "velvet", zh: "天鹅绒", en: "Velvet" },
  { key: "shortPlush", zh: "短毛绒", en: "Short Plush" },
  { key: "satin", zh: "色丁布", en: "Satin" },
  { key: "canvas", zh: "帆布", en: "Canvas" },
  { key: "nonwoven", zh: "无纺布", en: "Non-woven" },
  { key: "puLeather", zh: "PU皮革", en: "PU Leather" },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'customOem' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  return {
    title: `${t('title')} - ${tc('siteName')}`,
    description: t('subtitle'),
  };
}

export default async function CustomOemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("customOem");

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="ODM / OEM"
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* 5-Step Process */}
      <section className="section-padding section-padding-lg">
        <div className="container-page">
          <SectionHeading eyebrow="PROCESS" title={t("subtitle")} />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-5">
            {steps.map((step) => (
              <div key={step} className="group relative text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-dark font-display text-2xl font-semibold text-gold-300 shadow-lg shadow-neutral-900/20 transition-all duration-500 group-hover:bg-gold-500 group-hover:text-white">
                  {step}
                  <span className="absolute inset-0 rounded-full ring-2 ring-gold-400/40 scale-110 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-neutral-800">
                  {t(`step${step}_title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {t(`step${step}_desc`)}
                </p>
                {step < 5 && (
                  <div className="hidden lg:flex absolute top-8 -right-5 z-10 text-gold-400 text-xl items-center">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section-padding section-padding-lg bg-neutral-100">
        <div className="container-page">
          <SectionHeading eyebrow="MATERIALS" title={t("materials_title")} />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {materials.map((mat) => (
              <div
                key={mat.key}
                className="group rounded-2xl border border-neutral-200 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-600 ring-1 ring-gold-300 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="mt-4 font-medium text-neutral-700">
                  {locale === "en" ? mat.en : mat.zh}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ & Lead Time */}
      <section className="section-padding section-padding-lg">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-7">
            <div className="group relative overflow-hidden rounded-3xl bg-forest-dark p-9 lg:p-11 shadow-xl shadow-neutral-900/20">
              <div className="pointer-events-none absolute -top-14 -right-14 h-44 w-44 rounded-full bg-gold-500/15 blur-[60px]" />
              <p className="eyebrow text-gold-300">MOQ</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-cream">
                {t("moq_title")}
              </h3>
              <div className="mt-6 space-y-3.5">
                {(locale === "en"
                  ? [
                      "Velvet/Plush bags: MOQ 300-500 pcs",
                      "Satin bags: MOQ 500 pcs",
                      "Canvas bags: MOQ 200 pcs",
                      "Custom OEM: negotiable based on design",
                    ]
                  : [
                      "绒布/毛绒袋：起订量 300-500 件",
                      "色丁布袋：起订量 500 件",
                      "帆布袋：起订量 200 件",
                      "定制加工：根据设计面议",
                    ]
                ).map((line) => (
                  <p key={line} className="flex items-start gap-3 text-sm text-neutral-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold-500 to-gold-600 p-9 lg:p-11 shadow-xl shadow-gold-900/25">
              <p className="eyebrow text-gold-50">LEAD TIME</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                {t("leadtime_title")}
              </h3>
              <div className="mt-6 space-y-3.5">
                {(locale === "en"
                  ? [
                      "Sampling: 3-5 business days",
                      "Bulk production: 7-15 business days",
                      "Custom printing: add 3-5 days",
                      "Shipping: 3-7 days domestic / 7-20 days international",
                    ]
                  : [
                      "打样周期：3-5 个工作日",
                      "大货生产：7-15 个工作日",
                      "定制印刷：增加 3-5 天",
                      "物流：国内 3-7 天 / 国际 7-20 天",
                    ]
                ).map((line) => (
                  <p key={line} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest-dark via-forest to-primary-800 px-8 py-16 lg:py-20 text-center shadow-2xl shadow-neutral-900/25">
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-56 w-[36rem] rounded-full bg-gold-500/15 blur-[90px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl lg:text-4xl font-semibold text-cream leading-tight tracking-tight">
                {t("cta_title")}
              </h2>
              <Link
                href="/contact"
                className="btn-shine group mt-9 inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-11 py-4 text-base font-semibold text-white shadow-lg shadow-gold-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600"
              >
                {t("cta_button")}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
