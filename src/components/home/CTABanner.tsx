import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function CTABanner() {
  const t = await getTranslations("homepage");

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-center text-white">
      <div className="container-page">
        <h2 className="text-3xl font-bold lg:text-4xl">
          {t("cta_title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          {t("cta_subtitle")}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-accent px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg"
        >
          {t("cta_button")}
        </Link>
      </div>
    </section>
  );
}
