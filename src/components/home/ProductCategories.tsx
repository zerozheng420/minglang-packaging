import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/ui/SectionHeading";
import { BLUR_PLACEHOLDER } from "@/lib/placeholder";

interface CategoryCard {
  titleKey: string;
  descKey: string;
  image: string;
}

const categories: CategoryCard[] = [
  {
    titleKey: "categories_greyVelvet",
    descKey: "categories_greyVelvet_desc",
    image: "/images/products/grey-velvet/1-.jpg",
  },
  {
    titleKey: "categories_shortPlush",
    descKey: "categories_shortPlush_desc",
    image: "/images/products/short-plush/8811.jpg",
  },
  {
    titleKey: "categories_satin",
    descKey: "categories_satin_desc",
    image: "/images/products/satin/07a68e1bb4bbc85345c7dcaeb53cdea%20-%20副本.jpg",
  },
  {
    titleKey: "categories_canvas",
    descKey: "categories_canvas_desc",
    image: "/images/products/canvas/O1CN01H0v0P827GFsmautgA_!!2215564757769-0-cib.jpg",
  },
];

export default async function ProductCategories() {
  const t = await getTranslations("homepage");

  return (
    <section className="section-padding section-padding-lg bg-cream">
      <div className="container-page">
        <SectionHeading
          eyebrow="COLLECTION"
          title={t("categories_title")}
          subtitle={t("categories_subtitle")}
        />

        <div className="mt-14 lg:mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.titleKey}
              href="/products"
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-neutral-900 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-neutral-900/25"
            >
              {/* Number watermark */}
              <span className="pointer-events-none absolute top-4 right-5 z-10 font-display text-5xl font-bold text-cream/25 transition-all duration-500 group-hover:text-gold-300/70">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={t(cat.titleKey as never)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/25 to-transparent" />

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl font-semibold text-cream transition-colors duration-300 group-hover:text-gold-200">
                  {t(cat.titleKey as never)}
                </h3>
                <p className="mt-1.5 text-sm text-cream/70 line-clamp-2">
                  {t(cat.descKey as never)}
                </p>

                <div className="mt-4 flex items-center gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                  <span className="eyebrow text-[0.65rem] text-cream/80">
                    VIEW SERIES
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
