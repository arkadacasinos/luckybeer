import { siteConfig } from "@/lib/site"

export const dynamic = "force-static"

export function GET() {
  const manifest = {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0e1a",
    theme_color: "#0a0e1a",
    icons: [
      {
        src: "/icon.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
      {
        src: "/apple-icon.jpg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
  }

  return Response.json(manifest, {
    headers: {
      "Content-Type": "application/manifest+json",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
