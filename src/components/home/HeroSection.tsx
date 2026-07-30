import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations("homepage");

  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-gradient-to-br from-forest-dark via-forest to-forest-light">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container-page relative z-10 text-white">
        <h1 className="animate-fade-in text-4xl font-bold leading-tight md:text-5xl lg:text-7xl">
          {t("hero_title")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          {t("hero_subtitle")}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-700 transition-all hover:bg-primary-50"
          >
            {t("hero_cta_products")}
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-hover"
          >
            {t("hero_cta_quote")}
          </Link>
        </div>
      </div>
    </section>
  );
}
