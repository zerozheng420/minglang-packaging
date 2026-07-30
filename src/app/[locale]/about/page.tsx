import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import SectionHeading from "@/components/ui/SectionHeading";

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
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-dark via-forest to-forest-light py-20">
        <div className="container-page text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold">{t("title")}</h1>
          <p className="mt-4 text-lg text-white/80">{t("experience_badge")}</p>
        </div>
      </section>

      {/* Company Structure */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading title={t("structure_title")} centered />
          <div className="mt-12 max-w-2xl mx-auto">
            {/* Parent */}
            <div className="bg-primary-50 border-2 border-primary-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-primary-800">
                {t("company_parent")}
              </h3>
              <p className="mt-2 text-neutral-600">{t("company_parent_desc")}</p>
            </div>

            {/* Vertical line */}
            <div className="flex justify-center py-4">
              <div className="w-0.5 h-8 bg-primary-300" />
            </div>

            {/* Children */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-neutral-200 rounded-xl p-6 text-center hover:border-primary-300 hover:shadow-md transition-all">
                <h4 className="text-lg font-bold text-primary-700">
                  {t("company_subsidiary1")}
                </h4>
                <p className="mt-2 text-sm text-neutral-500">
                  {t("company_subsidiary1_desc")}
                </p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl p-6 text-center hover:border-primary-300 hover:shadow-md transition-all">
                <h4 className="text-lg font-bold text-primary-700">
                  {t("company_subsidiary2")}
                </h4>
                <p className="mt-2 text-sm text-neutral-500">
                  {t("company_subsidiary2_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-neutral-50">
        <div className="container-page">
          <SectionHeading title={t("mission_title")} centered />
          <div className="mt-8 max-w-3xl mx-auto">
            <blockquote className="border-l-4 border-primary-500 pl-6 py-2 text-lg text-neutral-600 italic leading-relaxed">
              {t("mission_text")}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeading title={t("history_title")} centered />
          <div className="mt-12 max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary-200 mt-2" />
                  )}
                </div>
                <div>
                  <span className="text-sm font-bold text-primary-600">
                    {item.year}
                  </span>
                  <p className="mt-1 text-neutral-600">
                    {locale === "en" ? item.en : item.zh}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Image + Stats */}
      <section className="section-padding bg-neutral-50">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/factory/汇莉达工厂实力.jpg"
                alt="Factory facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.key}
                    className="bg-white border border-neutral-200 rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-primary-600">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-neutral-500">
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
