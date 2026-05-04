/**
 * Единый источник URL сайта.
 * Меняется через переменную окружения NEXT_PUBLIC_SITE_URL.
 * Используется в metadata, JSON-LD, robots.txt, sitemap.xml.
 */
function normalizeUrl(raw: string | undefined): string {
  const fallback = "https://luckybear.casino"
  if (!raw) return fallback
  const trimmed = raw.trim().replace(/\/$/, "")
  if (!trimmed) return fallback
  // если протокол не задан — добавляем https://
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
  try {
    // валидируем — если URL невалиден, fallback
    return new URL(withProtocol).origin
  } catch {
    return fallback
  }
}

export const siteUrl = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL)

export const siteConfig = {
  url: siteUrl,
  name: "LuckyBear Casino",
  shortName: "LuckyBear",
  title: "LuckyBear — Premium Casino | Лаки Бир Казино Официальный Сайт",
  description:
    "LuckyBear casino — премиум онлайн казино с лучшими бонусами, быстрыми выплатами и тысячами игр от ведущих провайдеров. Лаки бир казино официальный сайт.",
  locale: "ru_RU",
  keywords: [
    "lucky bear casino",
    "luckybear casino",
    "luckybear casino официальный",
    "luckybear casino официальный сайт",
    "lucky bear казино",
    "лаки беар казино",
    "лаки бир казино",
    "лакибир казино",
    "лаки бир казино зеркало",
    "лаки бир казино онлайн",
    "лаки бир казино официальный",
    "лаки бир казино официальный сайт",
    "лакибир казино официальный сайт",
    "лаки бир казино сайт",
    "luckybear casino зеркало",
    "luckybear casino играть",
  ],
}
