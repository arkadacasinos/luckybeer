import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = ["", "/sport", "/games", "/slots", "/live", "/bonuses", "/vip", "/promotions"]

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? ("daily" as const) : ("weekly" as const),
    priority: path === "" ? 1 : 0.7,
  }))
}
