import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function CTABanner() {
  const t = await getTranslations("homepage");
  const c = await getTranslations("common");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-dark via-forest to-primary-800 py-24 lg:py-32 text-center">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[46rem] rounded-full bg-gold-500/15 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-primary-500/20 blur-[90px]" />

      {/* Decorative ring */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full border border-gold-300/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[22rem] w-[22rem] rounded-full border border-gold-300/10" />

      <div className="relative container-page">
        <p className="eyebrow text-gold-300 mb-5">START YOUR PROJECT</p>
        <h2 className="mx-auto max-w-3xl font-display font-semibold text-3xl sm:text-4xl lg:text-6xl leading-tight tracking-tight text-cream">
          {t("cta_title")}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base lg:text-lg text-neutral-300 leading-relaxed">
          {t("cta_subtitle")}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-shine group inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-gold-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600"
          >
            {t("cta_button")}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-10 py-4 text-base font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:text-gold-200"
          >
            {c("button_viewProducts")}
          </Link>
        </div>

        <p className="mt-10 text-sm text-neutral-400">
          {c("footer_phone")}: <span className="text-gold-300 font-medium">{c("contact_phone_value")}</span>
          <span className="mx-3 text-neutral-600">·</span>
          {c("footer_wechat")}: <span className="text-gold-300 font-medium">{c("contact_wechat_value")}</span>
        </p>
      </div>
    </section>
  );
}
