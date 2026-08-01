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
  // ============ Grey Velvet (5 products) ============
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
      '/images/products/grey-velvet/2-.jpg',
      '/images/products/grey-velvet/4个亿.jpg',
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
  {
    slug: 'green-velvet-eco-pouch',
    category: 'grey-velvet',
    images: [
      '/images/products/grey-velvet/1亿.jpg',
      '/images/products/grey-velvet/3亿.jpg',
    ],
    title: {
      'zh-CN': '墨绿天鹅绒环保收纳袋',
      'zh-TW': '墨綠天鵝絨環保收納袋',
      en: 'Forest Green Velvet Eco Pouch',
    },
    material: {
      'zh-CN': '墨绿色天鹅绒',
      'zh-TW': '墨綠色天鵝絨',
      en: 'Forest Green Velvet',
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
    slug: 'red-velvet-gift-pouch',
    category: 'grey-velvet',
    images: [
      '/images/products/grey-velvet/3亿.jpg',
      '/images/products/grey-velvet/2亿.jpg',
    ],
    title: {
      'zh-CN': '酒红天鹅绒礼品袋',
      'zh-TW': '酒紅天鵝絨禮品袋',
      en: 'Wine Red Velvet Gift Pouch',
    },
    material: {
      'zh-CN': '酒红色天鹅绒',
      'zh-TW': '酒紅色天鵝絨',
      en: 'Wine Red Velvet',
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
  {
    slug: 'rose-velvet-jewelry-set',
    category: 'grey-velvet',
    images: [
      '/images/products/grey-velvet/O1CN010XjDm021diRYToZry_!!3189247008-0-cib.jpg',
      '/images/products/grey-velvet/O1CN01q0ypdW1dE1hkqF0UI_!!2218362213703-0-cib.jpg',
    ],
    title: {
      'zh-CN': '玫瑰粉天鹅绒首饰袋套装',
      'zh-TW': '玫瑰粉天鵝絨首飾袋套裝',
      en: 'Rose Pink Velvet Jewelry Pouch Set',
    },
    material: {
      'zh-CN': '玫瑰粉色天鹅绒',
      'zh-TW': '玫瑰粉色天鵝絨',
      en: 'Rose Pink Velvet',
    },
    sizes: {
      'zh-CN': '8×10 cm / 10×12 cm / 12×15 cm',
      'zh-TW': '8×10 cm / 10×12 cm / 12×15 cm',
      en: '8×10 cm / 10×12 cm / 12×15 cm',
    },
    moq: '1,000 pcs',
    sampleTime: '3-5 工作日',
    bulkTime: '15-20 工作日',
  },

  // ============ Short Plush (6 products) ============
  {
    slug: 'soft-short-plush-storage-pouch',
    category: 'short-plush',
    images: [
      '/images/products/short-plush/8811.jpg',
      '/images/products/short-plush/紫色01.jpg',
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
      '/images/products/short-plush/紫色01.jpg',
      '/images/products/short-plush/8811.jpg',
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
  {
    slug: 'beige-plush-pouch',
    category: 'short-plush',
    images: [
      '/images/products/short-plush/紫色02.jpg',
      '/images/products/short-plush/紫色01.jpg',
    ],
    title: {
      'zh-CN': '米色短毛绒收纳袋',
      'zh-TW': '米色短毛絨收納袋',
      en: 'Beige Short Plush Pouch',
    },
    material: {
      'zh-CN': '米色短毛绒',
      'zh-TW': '米色短毛絨',
      en: 'Beige Short Plush',
    },
    sizes: {
      'zh-CN': '12×15 cm / 15×20 cm / 20×28 cm',
      'zh-TW': '12×15 cm / 15×20 cm / 20×28 cm',
      en: '12×15 cm / 15×20 cm / 20×28 cm',
    },
    moq: '1,000 pcs',
    sampleTime: '3-5 工作日',
    bulkTime: '15-20 工作日',
  },
  {
    slug: 'purple-plush-gift-bag',
    category: 'short-plush',
    images: [
      '/images/products/short-plush/紫色11.jpg',
      '/images/products/short-plush/紫色13.jpg',
    ],
    title: {
      'zh-CN': '香芋紫短毛绒礼品袋',
      'zh-TW': '香芋紫短毛絨禮品袋',
      en: 'Lilac Purple Plush Gift Bag',
    },
    material: {
      'zh-CN': '香芋紫色短毛绒',
      'zh-TW': '香芋紫色短毛絨',
      en: 'Lilac Short Plush',
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
  {
    slug: 'sky-blue-plush-pouch',
    category: 'short-plush',
    images: [
      '/images/products/short-plush/紫色14.jpg',
      '/images/products/short-plush/紫色13.jpg',
    ],
    title: {
      'zh-CN': '浅蓝短毛绒化妆收纳袋',
      'zh-TW': '淺藍短毛絨化妝收納袋',
      en: 'Sky Blue Plush Cosmetic Pouch',
    },
    material: {
      'zh-CN': '浅蓝色短毛绒',
      'zh-TW': '淺藍色短毛絨',
      en: 'Sky Blue Short Plush',
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
    slug: 'camel-plush-storage-bag',
    category: 'short-plush',
    images: [
      '/images/products/short-plush/紫色94.jpg',
      '/images/products/short-plush/紫色98.jpg',
    ],
    title: {
      'zh-CN': '驼色短毛绒大容量收纳袋',
      'zh-TW': '駝色短毛絨大容量收納袋',
      en: 'Camel Plush Large Storage Bag',
    },
    material: {
      'zh-CN': '驼色短毛绒',
      'zh-TW': '駝色短毛絨',
      en: 'Camel Short Plush',
    },
    sizes: {
      'zh-CN': '20×28 cm / 25×35 cm / 30×40 cm',
      'zh-TW': '20×28 cm / 25×35 cm / 30×40 cm',
      en: '20×28 cm / 25×35 cm / 30×40 cm',
    },
    moq: '1,000 pcs',
    sampleTime: '3-5 工作日',
    bulkTime: '15-20 工作日',
  },

  // ============ Satin (5 products) ============
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
      '/images/products/satin/3ed72b4bcca216a52c3300f5075a75a.jpg',
      '/images/products/satin/07a68e1bb4bbc85345c7dcaeb53cdea%20-%20副本.jpg',
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
  {
    slug: 'deep-blue-satin-pouch',
    category: 'satin',
    images: [
      '/images/products/satin/f9913274c598a54fbd7f27cfd7e4ed2.jpg',
      '/images/products/satin/3ed72b4bcca216a52c3300f5075a75a.jpg',
    ],
    title: {
      'zh-CN': '深蓝缎面抽绳袋',
      'zh-TW': '深藍緞面抽繩袋',
      en: 'Deep Blue Satin Drawstring Bag',
    },
    material: {
      'zh-CN': '深蓝色缎面',
      'zh-TW': '深藍色緞面',
      en: 'Deep Blue Satin',
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
  {
    slug: 'rust-satin-gift-pouch',
    category: 'satin',
    images: [
      '/images/products/satin/d4194be2ef88fadfee28af8bc115b83.jpg',
      '/images/products/satin/f07c45f61399a32c2b106cad3174982.jpg',
    ],
    title: {
      'zh-CN': '赤陶红缎面礼品袋',
      'zh-TW': '赤陶紅緞面禮品袋',
      en: 'Rust Red Satin Gift Pouch',
    },
    material: {
      'zh-CN': '赤陶红色缎面',
      'zh-TW': '赤陶紅色緞面',
      en: 'Rust Red Satin',
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
  {
    slug: 'charcoal-satin-jewelry-pouch',
    category: 'satin',
    images: [
      '/images/products/satin/f07c45f61399a32c2b106cad3174982.jpg',
      '/images/products/satin/d4194be2ef88fadfee28af8bc115b83.jpg',
    ],
    title: {
      'zh-CN': '炭灰缎面首饰收纳袋',
      'zh-TW': '炭灰緞面首飾收納袋',
      en: 'Charcoal Satin Jewelry Pouch',
    },
    material: {
      'zh-CN': '炭灰色缎面',
      'zh-TW': '炭灰色緞面',
      en: 'Charcoal Satin',
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

  // ============ Canvas (4 products) ============
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
      '/images/products/canvas/O1CN01DTSEJl27GFsxjsrjg_!!2215564757769-0-cib.jpg',
      '/images/products/canvas/O1CN01H0v0P827GFsmautgA_!!2215564757769-0-cib.jpg',
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
  {
    slug: 'green-canvas-eco-bag',
    category: 'canvas',
    images: [
      '/images/products/canvas/O1CN01LokCs927GFuttrM0N_!!2215564757769-0-cib.jpg',
      '/images/products/canvas/O1CN01mvL2A027GFsdxlMke_!!2215564757769-0-cib.jpg',
    ],
    title: {
      'zh-CN': '军绿帆布环保购物袋',
      'zh-TW': '軍綠帆布環保購物袋',
      en: 'Olive Green Canvas Eco Bag',
    },
    material: {
      'zh-CN': '军绿色帆布',
      'zh-TW': '軍綠色帆布',
      en: 'Olive Green Canvas',
    },
    sizes: {
      'zh-CN': '20×25 cm / 25×35 cm / 35×40 cm',
      'zh-TW': '20×25 cm / 25×35 cm / 35×40 cm',
      en: '20×25 cm / 25×35 cm / 35×40 cm',
    },
    moq: '1,000 pcs',
    sampleTime: '3-5 工作日',
    bulkTime: '15-20 工作日',
  },
  {
    slug: 'natural-canvas-tote-pouch',
    category: 'canvas',
    images: [
      '/images/products/canvas/O1CN01mvL2A027GFsdxlMke_!!2215564757769-0-cib.jpg',
      '/images/products/canvas/O1CN01DTSEJl27GFsxjsrjg_!!2215564757769-0-cib.jpg',
    ],
    title: {
      'zh-CN': '原色帆布束口袋',
      'zh-TW': '原色帆布束口袋',
      en: 'Natural Canvas Drawstring Pouch',
    },
    material: {
      'zh-CN': '原色帆布',
      'zh-TW': '原色帆布',
      en: 'Natural Canvas',
    },
    sizes: {
      'zh-CN': '12×18 cm / 18×25 cm / 25×35 cm',
      'zh-TW': '12×18 cm / 18×25 cm / 25×35 cm',
      en: '12×18 cm / 18×25 cm / 25×35 cm',
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
    'zh-CN': '天鹅绒系列',
    'zh-TW': '天鵝絨系列',
    en: 'Velvet Series',
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
