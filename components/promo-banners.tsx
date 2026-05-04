import Image from "next/image"

const banners = [
  {
    src: "/banners/jackpot.jpg",
    alt: "Ежедневно разыгрывается более 5 000 000 ₽",
    title: "Ежедневно разыгрывается более",
    big: "5 000 000 ₽",
    sub: "Акция Lucky Bonus",
  },
  {
    src: "/banners/bonus.jpg",
    alt: "Бонус за первые 4 депозита 360% + 250 FS",
    title: "Бонус за первые 4 депозита!",
    big: "360% +250 FS",
    sub: "Получите максимум на старте",
  },
  {
    src: "/banners/vip.jpg",
    alt: "Повышайте VIP уровень для привилегий",
    title: "Повышайте VIP",
    big: "Привилегии и низкие комиссии",
    sub: "Больше возможностей и скидок →",
  },
]

export function PromoBanners() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" aria-label="Акции">
      {banners.map((b) => (
        <article
          key={b.alt}
          className="group relative aspect-[16/7] overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/40"
        >
          <Image
            src={b.src}
            alt={b.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-center gap-1 p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-foreground/70">
              {b.title}
            </p>
            <h3 className="font-display text-2xl font-extrabold leading-tight text-balance md:text-3xl">
              {b.big}
            </h3>
            <p className="text-sm text-foreground/70">{b.sub}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
