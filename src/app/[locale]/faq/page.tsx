import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { FAQSchema } from "@/components/ui/StructuredData";

type Locale = "zh-CN" | "zh-TW" | "en";

interface FaqItem {
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
  category: "ordering" | "customization" | "shipping" | "payment";
}

const faqs: FaqItem[] = [
  {
    question: {
      "zh-CN": "最小起订量是多少？",
      "zh-TW": "最小起訂量是多少？",
      en: "What is the minimum order quantity?",
    },
    answer: {
      "zh-CN": "不同材质起订量不同。绒布袋/毛绒袋 300-500 件起订，帆布袋 200 件起订，色丁布袋 500 件起订。定制加工根据设计面议。",
      "zh-TW": "不同材質起訂量不同。絨布袋/毛絨袋 300-500 件起訂，帆布袋 200 件起訂，色丁布袋 500 件起訂。定製加工根據設計面議。",
      en: "MOQ varies by material. Velvet/Plush bags: 300-500 pcs. Canvas bags: 200 pcs. Satin bags: 500 pcs. Custom OEM: negotiable based on design.",
    },
    category: "ordering",
  },
  {
    question: {
      "zh-CN": "如何下单？",
      "zh-TW": "如何下單？",
      en: "How to place an order?",
    },
    answer: {
      "zh-CN": "您可以通过联系我们页面提交询价表单，或直接发送邮件至 sales@minglangpackaging.com。我们的销售团队会在24小时内回复您。",
      "zh-TW": "您可以通過聯繫我們頁面提交詢價表單，或直接發送郵件至 sales@minglangpackaging.com。我們的銷售團隊會在24小時內回覆您。",
      en: "You can submit an inquiry through our Contact page, or email us directly at sales@minglangpackaging.com. Our sales team will respond within 24 hours.",
    },
    category: "ordering",
  },
  {
    question: {
      "zh-CN": "支持哪些付款方式？",
      "zh-TW": "支持哪些付款方式？",
      en: "What payment methods do you accept?",
    },
    answer: {
      "zh-CN": "我们支持银行转账（T/T）、支付宝、微信支付。国际贸易客户支持 PayPal 和西联汇款。常规合作客户可申请月结。",
      "zh-TW": "我們支持銀行轉賬（T/T）、支付寶、微信支付。國際貿易客戶支持 PayPal 和西聯匯款。常規合作客戶可申請月結。",
      en: "We accept bank transfer (T/T), Alipay, WeChat Pay. International clients: PayPal and Western Union. Regular clients may apply for monthly settlement.",
    },
    category: "payment",
  },
  {
    question: {
      "zh-CN": "可以定制尺寸和颜色吗？",
      "zh-TW": "可以定製尺寸和顏色嗎？",
      en: "Can you customize sizes and colors?",
    },
    answer: {
      "zh-CN": "当然可以！我们支持完全定制。您可以指定尺寸、颜色、材质，还可以加印Logo、图案、文字。我们的设计团队会根据您的需求提供专业建议。",
      "zh-TW": "當然可以！我們支持完全定製。您可以指定尺寸、顏色、材質，還可以加印Logo、圖案、文字。我們的設計團隊會根據您的需求提供專業建議。",
      en: "Absolutely! We support full customization. You can specify sizes, colors, materials, and add logos, patterns, or text. Our design team provides professional advice based on your needs.",
    },
    category: "customization",
  },
  {
    question: {
      "zh-CN": "打样需要多长时间？打样费用如何？",
      "zh-TW": "打樣需要多長時間？打樣費用如何？",
      en: "How long does sampling take? What are the costs?",
    },
    answer: {
      "zh-CN": "标准产品打样 3-5 个工作日，定制产品 5-7 个工作日。打样费用通常为 ¥100-300/款，正式订单确认后可抵扣货款。",
      "zh-TW": "標準產品打樣 3-5 個工作日，定製產品 5-7 個工作日。打樣費用通常為 ¥100-300/款，正式訂單確認後可抵扣貨款。",
      en: "Standard product sampling: 3-5 business days. Custom design: 5-7 business days. Sampling fee is typically ¥100-300/style, which can be deducted from the bulk order upon confirmation.",
    },
    category: "customization",
  },
  {
    question: {
      "zh-CN": "国际物流如何安排？运费怎么计算？",
      "zh-TW": "國際物流如何安排？運費怎麼計算？",
      en: "How is international shipping arranged? How are costs calculated?",
    },
    answer: {
      "zh-CN": "我们与国际快递（DHL/UPS/FedEx）及海运空运货代合作。运费根据重量、体积和目的地计算。也欢迎客户使用自己的货代账号。",
      "zh-TW": "我們與國際快遞（DHL/UPS/FedEx）及海運空運貨代合作。運費根據重量、體積和目的地計算。也歡迎客戶使用自己的貨代賬號。",
      en: "We work with international couriers (DHL/UPS/FedEx) and sea/air freight forwarders. Shipping costs are calculated based on weight, volume, and destination. Clients are welcome to use their own freight accounts.",
    },
    category: "shipping",
  },
  {
    question: {
      "zh-CN": "大货生产周期多长？",
      "zh-TW": "大貨生產週期多長？",
      en: "How long is the bulk production lead time?",
    },
    answer: {
      "zh-CN": "常规订单 7-15 个工作日，定制印花/绣花增加 3-5 天，旺季（11月-次年1月）请预留额外时间。",
      "zh-TW": "常規訂單 7-15 個工作日，定製印花/繡花增加 3-5 天，旺季（11月-次年1月）請預留額外時間。",
      en: "Regular orders: 7-15 business days. Custom printing/embroidery: add 3-5 days. Peak season (Nov-Jan): please allow additional time.",
    },
    category: "shipping",
  },
  {
    question: {
      "zh-CN": "你们的材质是环保的吗？",
      "zh-TW": "你們的材質是環保的嗎？",
      en: "Are your materials eco-friendly?",
    },
    answer: {
      "zh-CN": "是的，环保是我们的核心理念。我们优先使用可回收面料和环保染料，帆布袋采用纯棉材质可自然降解。我们持续探索更环保的包装方案。",
      "zh-TW": "是的，環保是我們的核心理念。我們優先使用可回收面料和環保染料，帆布袋採用純棉材質可自然降解。我們持續探索更環保的包裝方案。",
      en: "Yes, eco-friendliness is our core philosophy. We prioritize recyclable fabrics and eco-friendly dyes. Our canvas bags use natural cotton that is biodegradable. We continuously explore greener packaging solutions.",
    },
    category: "customization",
  },
];

const categoryNameKeys: Record<string, string> = {
  ordering: "category_ordering",
  customization: "category_customization",
  shipping: "category_shipping",
  payment: "category_payment",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  return {
    title: `${t('title')} - ${tc('siteName')}`,
    description: t('title'),
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = await getTranslations("faq");

  // Group FAQs by category
  const grouped = faqs.reduce(
    (acc, faq) => {
      if (!acc[faq.category]) acc[faq.category] = [];
      acc[faq.category].push({
        question: faq.question[loc],
        answer: faq.answer[loc],
      });
      return acc;
    },
    {} as Record<string, { question: string; answer: string }[]>
  );

  const faqSchemaItems = faqs.map((faq) => ({
    question: faq.question[loc],
    answer: faq.answer[loc],
  }));

  return (
    <>
      <FAQSchema items={faqSchemaItems} />
      <div className="section-padding">
        <div className="container-page max-w-3xl">
          <SectionHeading title={t("title")} centered />

          <div className="mt-12 space-y-10">
            {Object.entries(categoryNameKeys).map(([catKey, nameKey]) => {
              const items = grouped[catKey];
              if (!items || items.length === 0) return null;
              return (
                <div key={catKey}>
                  <h2 className="text-xl font-bold text-primary-700 mb-4">
                    {t(nameKey)}
                  </h2>
                  <Accordion items={items} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
