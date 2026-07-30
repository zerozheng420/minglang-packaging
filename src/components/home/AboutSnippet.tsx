import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import StatsCounter from "@/components/ui/StatsCounter";

const stats = [
  { value: "5000+", numericValue: 5000, suffix: "+", labelKey: "stats_clients" },
  { value: "100000+", numericValue: 100000, suffix: "+", labelKey: "stats_orders" },
  { value: "100+", numericValue: 100, suffix: "+", labelKey: "stats_categories" },
  { value: "20", numericValue: 20, suffix: "", labelKey: "stats_experience" },
] as const;

export default async function AboutSnippet() {
  const h = await getTranslations("homepage");
  const a = await getTranslations("about");
  const c = await getTranslations("common");

  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:aspect-[3/4]">
            <Image
              src="/images/factory/汇莉达工厂实力.jpg"
              alt={a("experience_badge")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Text content */}
          <div>
            {/* Badge */}
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1 text-sm font-medium text-primary-700">
              {a("experience_badge")}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-neutral-800 lg:text-4xl">
              {h("aboutIntro_title")}
            </h2>

            <p className="mt-4 text-neutral-500 leading-relaxed">
              {h("aboutIntro_text")}
            </p>

            {/* Stats row */}
            <StatsCounter
              items={stats.map((stat) => ({
                value: stat.value,
                numericValue: stat.numericValue,
                suffix: stat.suffix,
                label: h(stat.labelKey as never),
              }))}
              className="mt-8"
            />

            {/* Learn more link */}
            <Link
              href="/about"
              className="mt-8 inline-block font-medium text-primary-600 underline hover:text-primary-700"
            >
              {c("button_learnMore")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
