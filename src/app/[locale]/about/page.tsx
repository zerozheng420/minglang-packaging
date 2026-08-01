import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { BLUR_PLACEHOLDER } from "@/lib/placeholder";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  return {
    title: `${t('title')} - ${tc('siteName')}`,
    description: t('mission_text').slice(0, 160),
  };
}

const stats = [
  { key: "experience", value: "20+", suffixKey: "experience_badge" },
  { key: "area", value: "5,000㎡", suffixKey: "factory_area" },
  { key: "lines", value: "8", suffixKey: "production_lines" },
  { key: "employees", value: "200+", suffixKey: "employees" },
];

const timeline = [
  { year: "2006", zh: "明朗包装在深圳成立", en: "Minglang Packaging founded in Shenzhen" },
  { year: "2012", zh: "醒龙包装成立，专注布艺收纳袋", en: "Xinglong Packaging established, focusing on fabric storage bags" },
  { year: "2018", zh: "汇莉达包装成立，拓展礼品包装业务", en: "Huilida Packaging established, expanding into gift packaging" },
  { year: "2022", zh: "工厂升级改造，引进全自动生产线", en: "Factory upgrade with fully automated production lines" },
  { year: "2026", zh: "服务全球客户，深耕柔性包装20年", en: "Serving global clients, 20 years in flexible packaging" },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("about");

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="ABOUT MINGLANG"
        title={t("title")}
        subtitle={t("experience_badge")}
      />

      {/* Company Structure */}
      <section className="section-padding section-padding-lg">
        <div className="container-page">
          <SectionHeading eyebrow="OUR GROUP" title={t("structure_title")} />
          <div className="mt-14 max-w-3xl mx-auto">
            {/* Parent */}
            <div className="relative rounded-3xl bg-forest-dark p-8 lg:p-10 text-center shadow-xl shadow-neutral-900/20 overflow-hidden">
              <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-gold-500/15 blur-[80px]" />
              <p className="eyebrow text-gold-300">GROUP COMPANY</p>
              <h3 className="mt-3 font-display text-2xl lg:text-3xl font-semibold text-cream">
                {t("company_parent")}
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-300">
                {t("company_parent_desc")}
              </p>
            </div>

            {/* Vertical line */}
            <div className="flex justify-center py-6">
              <div className="w-px h-10 bg-gradient-to-b from-gold-400 to-gold-400/0" />
            </div>

            {/* Children */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group rounded-2xl border border-neutral-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600 ring-1 ring-gold-300 font-display text-lg font-bold">
                  醒
                </span>
                <h4 className="mt-5 font-display text-lg font-semibold text-neutral-800">
                  {t("company_subsidiary1")}
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-500">
                  {t("company_subsidiary1_desc")}
                </p>
              </div>
              <div className="group rounded-2xl border border-neutral-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-600 ring-1 ring-gold-300 font-display text-lg font-bold">
                  汇
                </span>
                <h4 className="mt-5 font-display text-lg font-semibold text-neutral-800">
                  {t("company_subsidiary2")}
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-500">
                  {t("company_subsidiary2_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding section-padding-lg bg-forest-dark relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-primary-500/10 blur-[100px]" />
        <div className="container-page">
          <SectionHeading eyebrow="MISSION" title={t("mission_title")} dark />
          <div className="mx-auto mt-12 max-w-3xl">
            <blockquote className="relative rounded-3xl border border-gold-400/25 bg-white/[0.05] px-9 py-10 text-center backdrop-blur-sm">
              <span className="absolute -top-6 left-8 font-display text-7xl text-gold-400/60 leading-none select-none">
                “
              </span>
              <p className="text-lg lg:text-xl text-neutral-200 leading-relaxed">
                {t("mission_text")}
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding section-padding-lg">
        <div className="container-page">
          <SectionHeading eyebrow="JOURNEY" title={t("history_title")} />
          <div className="mt-14 max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-7 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 font-display text-xs font-bold text-white shadow-lg shadow-gold-500/30 mt-1 shrink-0">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-gold-300/70 to-gold-300/20 mt-2" />
                  )}
                </div>
                <div className="pt-1.5">
                  <span className="eyebrow text-gold-600 !text-[0.65rem]">
                    {item.year}
                  </span>
                  <p className="mt-2 text-neutral-700 leading-relaxed">
                    {locale === "en" ? item.en : item.zh}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Image + Stats */}
      <section className="section-padding section-padding-lg bg-neutral-100">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-neutral-900/20">
              <Image
                src="/images/factory/汇莉达工厂实力.jpg"
                alt="Factory facility"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
              <div className="absolute inset-4 rounded-2xl border border-cream/25 pointer-events-none" />
            </div>
            <div>
              <p className="eyebrow text-gold-600 mb-4">BY THE NUMBERS</p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-neutral-900 leading-tight">
                {t("experience_badge")}
              </h2>
              <div className="mt-9 grid grid-cols-2 gap-5">
                {stats.map((stat) => (
                  <div
                    key={stat.key}
                    className="group rounded-2xl border border-neutral-200 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
                  >
                    <div className="font-display text-4xl font-semibold text-gold-600">
                      {stat.value}
                    </div>
                    <div className="mt-2 h-px w-6 mx-auto bg-gold-400/50 transition-all duration-300 group-hover:w-10" />
                    <div className="mt-2.5 text-sm text-neutral-500">
                      {t(stat.suffixKey)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
