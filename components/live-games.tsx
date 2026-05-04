import Image from "next/image"
import { Tv, ChevronLeft, ChevronRight } from "lucide-react"

const liveGames = [
  { id: "1", title: "SPEED BACCARAT 1", provider: "PRAGMATIC", src: "/games/baccarat.jpg" },
  { id: "2", title: "RUSSIAN ROULETTE", provider: "PRAGMATIC", src: "/games/roulette.jpg" },
  { id: "3", title: "SIC BO", provider: "EZUGI", src: "/games/baccarat.jpg" },
  { id: "4", title: "SPEED ROULETTE", provider: "EZUGI", src: "/games/roulette.jpg" },
  { id: "5", title: "CRAZY TIME", provider: "EVOLUTION", src: "/games/crazytime.jpg" },
  { id: "6", title: "FIRST PERSON BLACKJACK", provider: "EVOLUTION", src: "/games/blackjack.jpg" },
  { id: "7", title: "MEGA WHEEL", provider: "PRAGMATIC", src: "/games/crazytime.jpg" },
  { id: "8", title: "ICE FISHING", provider: "EVOLUTION", src: "/games/baccarat.jpg" },
]

export function LiveGames() {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Tv className="h-4 w-4" />
          </span>
          Live-Игры
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="text-sm font-medium text-foreground/60 transition hover:text-foreground"
          >
            Все
          </button>
          <button
            type="button"
            aria-label="Назад"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground/60 transition hover:bg-secondary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Вперёд"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground/60 transition hover:bg-secondary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
        {liveGames.map((g) => (
          <button
            key={g.id}
            type="button"
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/50"
          >
            <Image
              src={g.src}
              alt={g.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            {/* Live badge */}
            <span className="absolute left-2 top-2 z-10 flex items-center gap-1 rounded-full bg-destructive px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-destructive-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Live
            </span>

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-black via-black/70 to-transparent p-3 pt-8">
              <p className="font-display text-sm font-extrabold uppercase leading-tight text-white text-balance">
                {g.title}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                {g.provider}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
