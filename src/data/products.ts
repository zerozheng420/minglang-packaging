export type ProductCategory = 'grey-velvet' | 'short-plush' | 'satin' | 'canvas';

export interface Product {
  slug: string;
  category: ProductCategory;
  images: string[];
  title: { 'zh-CN': string; 'zh-TW': string; en: string };
  material: { 'zh-CN': string; 'zh-TW': string; en: string };
  sizes: { 'zh-CN': string; 'zh-TW': string; en: string };
  moq: string;
  sampleTime: string;
  bulkTime: string;
}

export const products: Product[] = [
  // Grey Velvet (2 products)
  {
    slug: 'premium-grey-velvet-jewelry-pouch',
    category: 'grey-velvet',
    images: [
      '/images/products/grey-velvet/1-.jpg',
      '/images/products/grey-velvet/2-.jpg',
    ],
    title: {
      'zh-CN': '高级灰色天鹅绒珠宝袋',
      'zh-TW': '高級灰色天鵝絨珠寶袋',
      en: 'Premium Grey Velvet Jewelry Pouch',
    },
    material: {
      'zh-CN': '灰色天鹅绒',
      'zh-TW': '灰色天鵝絨',
      en: 'Grey Velvet',
    },
    sizes: {
      'zh-CN': '12×8 cm / 15×10 cm / 20×15 cm',
      'zh-TW': '12×8 cm / 15×10 cm / 20×15 cm',
      en: '12×8 cm / 15×10 cm / 20×15 cm',
    },
    moq: '1,000 pcs',
    sampleTime: '3-5 工作日',
    bulkTime: '15-20 工作日',
  },
  {
    slug: 'grey-velvet-drawstring-gift-bag',
    category: 'grey-velvet',
    images: [
      '/images/products/grey-velvet/1-.jpg',
      '/images/products/grey-velvet/2-.jpg',
    ],
    title: {
      'zh-CN': '灰色天鹅绒抽绳礼品袋',
      'zh-TW': '灰色天鵝絨抽繩禮品袋',
      en: 'Grey Velvet Drawstring Gift Bag',
    },
    material: {
      'zh-CN': '灰色天鹅绒',
      'zh-TW': '灰色天鵝絨',
      en: 'Grey Velvet',
    },
    sizes: {
      'zh-CN': '10×15 cm / 15×20 cm / 20×30 cm',
      'zh-TW': '10×15 cm / 15×20 cm / 20×30 cm',
      en: '10×15 cm / 15×20 cm / 20×30 cm',
    },
    moq: '1,000 pcs',
    sampleTime: '3-5 工作日',
    bulkTime: '15-20 工作日',
  },

  // Short Plush (2 products)
  {
    slug: 'soft-short-plush-storage-pouch',
    category: 'short-plush',
    images: [
      '/images/products/short-plush/8811.jpg',
      '/images/products/short-plush/紫色01.png',
    ],
    title: {
      'zh-CN': '柔软短毛绒收纳袋',
      'zh-TW': '柔軟短毛絨收納袋',
      en: 'Soft Short Plush Storage Pouch',
    },
    material: {
      'zh-CN': '短毛绒',
      'zh-TW': '短毛絨',
      en: 'Short Plush',
    },
    sizes: {
      'zh-CN': '10×12 cm / 13×18 cm / 18×25 cm',
      'zh-TW': '10×12 cm / 13×18 cm / 18×25 cm',
      en: '10×12 cm / 13×18 cm / 18×25 cm',
    },
    moq: '1,000 pcs',
    sampleTime: '3-5 工作日',
    bulkTime: '15-20 工作日',
  },
  {
    slug: 'short-plush-luxury-gift-bag',
    category: 'short-plush',
    images: [
      '/images/products/short-plush/8811.jpg',
      '/images/products/short-plush/紫色01.png',
    ],
    title: {
      'zh-CN': '短毛绒豪华礼品袋',
      'zh-TW': '短毛絨豪華禮品袋',
      en: 'Short Plush Luxury Gift Bag',
    },
    material: {
      'zh-CN': '短毛绒',
      'zh-TW': '短毛絨',
      en: 'Short Plush',
    },
    sizes: {
      'zh-CN': '15×20 cm / 20×25 cm / 25×35 cm',
      'zh-TW': '15×20 cm / 20×25 cm / 25×35 cm',
      en: '15×20 cm / 20×25 cm / 25×35 cm',
    },
    moq: '1,000 pcs',
    sampleTime: '3-5 工作日',
    bulkTime: '15-20 工作日',
  },

  // Satin (2 products)
  {
    slug: 'elegant-satin-jewelry-pouch',
    category: 'satin',
    images: [
      '/images/products/satin/07a68e1bb4bbc85345c7dcaeb53cdea%20-%20副本.jpg',
      '/images/products/satin/3ed72b4bcca216a52c3300f5075a75a.jpg',
    ],
    title: {
      'zh-CN': '优雅缎面珠宝袋',
      'zh-TW': '優雅緞面珠寶袋',
      en: 'Elegant Satin Jewelry Pouch',
    },
    material: {
      'zh-CN': '缎面',
      'zh-TW': '緞面',
      en: 'Satin',
    },
    sizes: {
      'zh-CN': '8×10 cm / 10×15 cm / 13×18 cm',
      'zh-TW': '8×10 cm / 10×15 cm / 13×18 cm',
      en: '8×10 cm / 10×15 cm / 13×18 cm',
    },
    moq: '1,000 pcs',
    sampleTime: '3-5 工作日',
    bulkTime: '15-20 工作日',
  },
  {
    slug: 'satin-drawstring-gift-pouch',
    category: 'satin',
    images: [
      '/images/products/satin/07a68e1bb4bbc85345c7dcaeb53cdea%20-%20副本.jpg',
      '/images/products/satin/3ed72b4bcca216a52c3300f5075a75a.jpg',
    ],
    title: {
      'zh-CN': '缎面抽绳礼品袋',
      'zh-TW': '緞面抽繩禮品袋',
      en: 'Satin Drawstring Gift Pouch',
    },
    material: {
      'zh-CN': '缎面',
      'zh-TW': '緞面',
      en: 'Satin',
    },
    sizes: {
      'zh-CN': '10×15 cm / 15×20 cm / 20×30 cm',
      'zh-TW': '10×15 cm / 15×20 cm / 20×30 cm',
      en: '10×15 cm / 15×20 cm / 20×30 cm',
    },
    moq: '1,000 pcs',
    sampleTime: '3-5 工作日',
    bulkTime: '15-20 工作日',
  },

  // Canvas (2 products)
  {
    slug: 'classic-canvas-drawstring-bag',
    category: 'canvas',
    images: [
      '/images/products/canvas/O1CN01H0v0P827GFsmautgA_!!2215564757769-0-cib.jpg',
      '/images/products/canvas/O1CN01DTSEJl27GFsxjsrjg_!!2215564757769-0-cib.jpg',
    ],
    title: {
      'zh-CN': '经典帆布抽绳袋',
      'zh-TW': '經典帆布抽繩袋',
      en: 'Classic Canvas Drawstring Bag',
    },
    material: {
      'zh-CN': '帆布',
      'zh-TW': '帆布',
      en: 'Canvas',
    },
    sizes: {
      'zh-CN': '15×20 cm / 20×30 cm / 30×40 cm',
      'zh-TW': '15×20 cm / 20×30 cm / 30×40 cm',
      en: '15×20 cm / 20×30 cm / 30×40 cm',
    },
    moq: '1,000 pcs',
    sampleTime: '3-5 工作日',
    bulkTime: '15-20 工作日',
  },
  {
    slug: 'canvas-utility-storage-pouch',
    category: 'canvas',
    images: [
      '/images/products/canvas/O1CN01H0v0P827GFsmautgA_!!2215564757769-0-cib.jpg',
      '/images/products/canvas/O1CN01DTSEJl27GFsxjsrjg_!!2215564757769-0-cib.jpg',
    ],
    title: {
      'zh-CN': '帆布多功能收纳袋',
      'zh-TW': '帆布多功能收納袋',
      en: 'Canvas Utility Storage Pouch',
    },
    material: {
      'zh-CN': '帆布',
      'zh-TW': '帆布',
      en: 'Canvas',
    },
    sizes: {
      'zh-CN': '10×15 cm / 15×22 cm / 20×30 cm',
      'zh-TW': '10×15 cm / 15×22 cm / 20×30 cm',
      en: '10×15 cm / 15×22 cm / 20×30 cm',
    },
    moq: '1,000 pcs',
    sampleTime: '3-5 工作日',
    bulkTime: '15-20 工作日',
  },
];

export const categoryLabels: Record<
  ProductCategory,
  { 'zh-CN': string; 'zh-TW': string; en: string }
> = {
  'grey-velvet': {
    'zh-CN': '灰色天鹅绒系列',
    'zh-TW': '灰色天鵝絨系列',
    en: 'Grey Velvet Series',
  },
  'short-plush': {
    'zh-CN': '短毛绒系列',
    'zh-TW': '短毛絨系列',
    en: 'Short Plush Series',
  },
  satin: {
    'zh-CN': '缎面系列',
    'zh-TW': '緞面系列',
    en: 'Satin Series',
  },
  canvas: {
    'zh-CN': '帆布系列',
    'zh-TW': '帆布系列',
    en: 'Canvas Series',
  },
};

export function groupProductsByCategory(locale: 'zh-CN' | 'zh-TW' | 'en') {
  const grouped: Record<string, { label: string; products: Product[] }> = {};
  for (const product of products) {
    if (!grouped[product.category]) {
      grouped[product.category] = {
        label: categoryLabels[product.category][locale],
        products: [],
      };
    }
    grouped[product.category].products.push(product);
  }
  return grouped;
}
