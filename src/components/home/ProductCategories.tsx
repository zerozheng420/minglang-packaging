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
    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionHeading
          title={t("categories_title")}
          subtitle={t("categories_subtitle")}
          centered
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.titleKey}
              href="/products"
              className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image area */}
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={t(cat.titleKey as never)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                />
              </div>

              {/* Text area */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-800">
                  {t(cat.titleKey as never)}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  {t(cat.descKey as never)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
