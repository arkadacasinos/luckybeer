import { faqItems } from "@/lib/faq-data"
import { siteUrl } from "@/lib/site"

export function JsonLd() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LuckyBear Casino",
    alternateName: [
      "Lucky Bear Casino",
      "LuckyBear",
      "Lucky Bear",
      "Лаки Бир Казино",
      "Лакибир Казино",
      "Лаки Беар Казино",
    ],
    description:
      "LuckyBear Casino — официальный сайт онлайн-казино с большим выбором слотов, лайв-игр и карточных игр. Быстрые выплаты, щедрые бонусы и круглосуточная поддержка.",
    applicationCategory: "GameApplication",
    applicationSubCategory: "CasinoGame",
    operatingSystem: "Web, Android, iOS",
    inLanguage: ["ru", "en"],
    url: siteUrl,
    image: `${siteUrl}/bear-logo.jpg`,
    screenshot: [
      `${siteUrl}/banners/jackpot.jpg`,
      `${siteUrl}/banners/bonus.jpg`,
      `${siteUrl}/banners/vip.jpg`,
    ],
    author: {
      "@type": "Organization",
      name: "Bridge Technologies B.V.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Dr. M.J. Hugenholtzweg 25",
        addressLocality: "Willemstad",
        addressCountry: "CW",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Bridge Technologies B.V.",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/bear-logo.jpg`,
      },
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      description: "Бонус 360% + 250 фриспинов за первые 4 депозита",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "12847",
      reviewCount: "9352",
    },
    featureList: [
      "Более 5000 слотов от ведущих провайдеров",
      "Live-игры с реальными дилерами",
      "Карточные игры: блэкджек, баккара, покер",
      "Колесо фортуны и ежедневные турниры",
      "Призовой пул 5 000 000 рублей",
      "Бонус 360% + 250 FS на первые 4 депозита",
      "VIP-программа с низкими комиссиями на вывод",
      "Поддержка криптовалют и банковских карт",
    ],
    keywords:
      "lucky bear casino, luckybear casino, luckybear casino официальный, luckybear casino официальный сайт, lucky bear казино, лаки беар казино, лаки бир казино, лакибир казино, лаки бир казино зеркало, лаки бир казино онлайн, лаки бир казино официальный, лаки бир казино официальный сайт, лакибир казино официальный сайт, лаки бир казино сайт, luckybear casino зеркало, luckybear casino играть",
    license: "OGL/2024/431/0231",
    award: "Curaçao Gaming Control Board Licensed",
    contentRating: "18+",
    audience: {
      "@type": "Audience",
      suggestedMinAge: 18,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}
