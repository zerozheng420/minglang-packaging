import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import StatsCounter from "@/components/ui/StatsCounter";
import { BLUR_PLACEHOLDER } from "@/lib/placeholder";

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
    <section className="section-padding section-padding-lg bg-cream overflow-hidden">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image with floating badge */}
          <div className="relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl shadow-neutral-900/20">
              <Image
                src="/images/factory/汇莉达工厂实力.jpg"
                alt={a("experience_badge")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
              {/* Frame corner accents */}
              <div className="absolute inset-4 rounded-2xl border border-cream/25 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-3 sm:right-6 flex items-center gap-3 rounded-2xl bg-forest-dark px-6 py-5 shadow-2xl shadow-neutral-900/30">
              <span className="font-display text-4xl font-bold text-gold-400">
                20
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-cream">
                  {a("experience_badge").replace(/\d+/g, "").trim()}
                </p>
                <p className="eyebrow mt-1 text-[0.6rem] text-gold-300">
                  EST. 2006
                </p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="eyebrow text-gold-600 mb-4">ABOUT US</p>

            <h2 className="font-display font-semibold text-3xl lg:text-5xl text-neutral-900 leading-tight tracking-tight">
              {h("aboutIntro_title")}
            </h2>

            <p className="mt-6 text-neutral-500 leading-relaxed text-base lg:text-lg">
              {h("aboutIntro_text")}
            </p>

            {/* Company structure chips */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[a("company_parent"), a("company_subsidiary1"), a("company_subsidiary2")].map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-600"
                >
                  {name}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <StatsCounter
              items={stats.map((stat) => ({
                value: stat.value,
                numericValue: stat.numericValue,
                suffix: stat.suffix,
                label: h(stat.labelKey as never),
              }))}
              className="mt-10"
            />

            {/* Learn more link */}
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 font-semibold text-gold-600 hover:text-gold-700"
            >
              {c("button_learnMore")}
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/40 text-gold-600 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white group-hover:translate-x-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
