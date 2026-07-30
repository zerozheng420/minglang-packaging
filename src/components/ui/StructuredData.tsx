// JSON-LD Structured Data components (server components)

// ─── Organization Schema ───────────────────────────────────────────

export function OrganizationSchema() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shenzhen Minglang Packaging Products Co., Ltd.',
    alternateName: '深圳市明朗包装制品有限公司',
    url: 'https://minglangpackaging.com',
    description:
      'Professional flexible packaging ODM/OEM manufacturer with 20 years of experience',
    foundingDate: '2006',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Shenzhen',
      addressRegion: 'Guangdong',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'sales@minglangpackaging.com',
      availableLanguage: ['Chinese', 'English'],
    },
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 100 },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
}

// ─── BreadcrumbList Schema ─────────────────────────────────────────

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Product Schema ────────────────────────────────────────────────

interface ProductData {
  name: string;
  description: string;
  image: string;
  category: string;
  material: string;
}

export function ProductSchema({ product }: { product: ProductData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://minglangpackaging.com${product.image}`,
    category: product.category,
    material: product.material,
    manufacturer: {
      '@type': 'Organization',
      name: 'Shenzhen Minglang Packaging Products Co., Ltd.',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── FAQ Schema ────────────────────────────────────────────────────

export function FAQSchema({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
