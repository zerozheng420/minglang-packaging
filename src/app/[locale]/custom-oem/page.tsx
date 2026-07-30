import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
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
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-dark via-forest to-forest-light py-24">
        <div className="container-page text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold">{t("title")}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            {t("cta_button")}
          </Link>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading title={t("subtitle")} centered />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                  {step}
                </div>
                <h3 className="mt-4 font-semibold text-neutral-800">
                  {t(`step${step}_title`)}
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  {t(`step${step}_desc`)}
                </p>
                {/* Arrow between steps (hidden on mobile, last step) */}
                {step < 5 && (
                  <div className="hidden lg:block absolute top-8 -right-3 text-primary-300 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section-padding bg-neutral-50">
        <div className="container-page">
          <SectionHeading title={t("materials_title")} centered />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {materials.map((mat) => (
              <div
                key={mat.key}
                className="bg-white border border-neutral-200 rounded-xl p-6 text-center hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto text-lg">
                  ✓
                </div>
                <p className="mt-3 font-medium text-neutral-700">
                  {locale === "en" ? mat.en : mat.zh}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ & Lead Time */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary-800">
                {t("moq_title")}
              </h3>
              <div className="mt-4 space-y-3 text-neutral-600">
                <p>
                  {locale === "en"
                    ? "• Velvet/Plush bags: MOQ 300-500 pcs"
                    : "• 绒布/毛绒袋：起订量 300-500 件"}
                </p>
                <p>
                  {locale === "en"
                    ? "• Satin bags: MOQ 500 pcs"
                    : "• 色丁布袋：起订量 500 件"}
                </p>
                <p>
                  {locale === "en"
                    ? "• Canvas bags: MOQ 200 pcs"
                    : "• 帆布袋：起订量 200 件"}
                </p>
                <p>
                  {locale === "en"
                    ? "• Custom OEM: negotiable based on design"
                    : "• 定制加工：根据设计面议"}
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary-800">
                {t("leadtime_title")}
              </h3>
              <div className="mt-4 space-y-3 text-neutral-600">
                <p>
                  {locale === "en"
                    ? "• Sampling: 3-5 business days"
                    : "• 打样周期：3-5 个工作日"}
                </p>
                <p>
                  {locale === "en"
                    ? "• Bulk production: 7-15 business days"
                    : "• 大货生产：7-15 个工作日"}
                </p>
                <p>
                  {locale === "en"
                    ? "• Custom printing: add 3-5 days"
                    : "• 定制印刷：增加 3-5 天"}
                </p>
                <p>
                  {locale === "en"
                    ? "• Shipping: 3-7 days domestic / 7-20 days international"
                    : "• 物流：国内 3-7 天 / 国际 7-20 天"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white text-center">
        <div className="container-page">
          <h2 className="text-3xl lg:text-4xl font-bold">{t("cta_title")}</h2>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg"
          >
            {t("cta_button")}
          </Link>
        </div>
      </section>
    </div>
  );
}
