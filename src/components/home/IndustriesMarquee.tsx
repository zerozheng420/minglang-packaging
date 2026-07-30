import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/ui/SectionHeading";

interface IndustryPill {
  labelKey: string;
}

const industries: IndustryPill[] = [
  { labelKey: "industries_jewelry" },
  { labelKey: "industries_beauty" },
  { labelKey: "industries_3c" },
  { labelKey: "industries_gift" },
  { labelKey: "industries_ecommerce" },
  { labelKey: "industries_brand" },
];

export default async function IndustriesMarquee() {
  const t = await getTranslations("homepage");

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-page">
        <SectionHeading
          title={t("industries_title")}
          centered
        />

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {industries.map((industry) => (
            <span
              key={industry.labelKey}
              className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-600 transition-colors hover:border-primary-300 hover:text-primary-600"
            >
              {t(industry.labelKey as never)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
