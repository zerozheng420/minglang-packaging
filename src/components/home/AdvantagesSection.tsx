import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/ui/SectionHeading";

interface Advantage {
  titleKey: string;
  descKey: string;
  icon: "star" | "clock" | "package" | "users" | "leaf" | "tag";
}

const advantages: Advantage[] = [
  { titleKey: "advantages_20years", descKey: "advantages_20years_desc", icon: "star" },
  { titleKey: "advantages_fastSampling", descKey: "advantages_fastSampling_desc", icon: "clock" },
  { titleKey: "advantages_lowMoq", descKey: "advantages_lowMoq_desc", icon: "package" },
  { titleKey: "advantages_b2b", descKey: "advantages_b2b_desc", icon: "users" },
  { titleKey: "advantages_eco", descKey: "advantages_eco_desc", icon: "leaf" },
  { titleKey: "advantages_price", descKey: "advantages_price_desc", icon: "tag" },
];

function AdvantageIcon({ icon }: { icon: Advantage["icon"] }) {
  const svg = (() => {
    switch (icon) {
      case "star":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        );
      case "clock":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        );
      case "package":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        );
      case "users":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        );
      case "leaf":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.115 5.19A9.002 9.002 0 0019.81 18.885 9.002 9.002 0 006.115 5.19zM9.75 14.25l5.25-5.25m-7.5 0L14.25 16.5"
          />
        );
      case "tag":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
          />
        );
    }
  })();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      {svg}
    </svg>
  );
}

export default async function AdvantagesSection() {
  const t = await getTranslations("homepage");

  return (
    <section className="relative overflow-hidden bg-forest-dark py-20 lg:py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-gold-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary-500/15 blur-[100px]" />

      <div className="relative container-page">
        <SectionHeading
          eyebrow="WHY MINGLANG"
          title={t("advantages_title")}
          dark
        />

        <div className="mt-14 lg:mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv) => (
            <div
              key={adv.titleKey}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:bg-white/[0.07]"
            >
              {/* Top gold hairline on hover */}
              <span className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-gold-500/15 text-gold-300 ring-1 ring-gold-400/30 transition-all duration-500 group-hover:bg-gold-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-gold-900/40">
                <AdvantageIcon icon={adv.icon} />
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-cream">
                {t(adv.titleKey as never)}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-300/80">
                {t(adv.descKey as never)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
