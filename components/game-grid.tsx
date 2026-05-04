"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

export type Game = {
  id: string
  title: string
  provider: string
  src: string
}

export function GameGrid({
  title,
  icon,
  games,
}: {
  title: string
  icon: React.ReactNode
  games: Game[]
}) {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
            {icon}
          </span>
          {title}
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

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </section>
  )
}

function GameCard({ game }: { game: Game }) {
  return (
    <button
      type="button"
      className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
    >
      <Image
        src={game.src}
        alt={game.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
        className="object-cover transition duration-500 group-hover:scale-110"
      />
      {/* Title overlay */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3 pt-10">
        <p className="font-display text-[13px] font-extrabold uppercase leading-tight tracking-wide text-white text-balance">
          {game.title}
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
          {game.provider}
        </p>
      </div>

      {/* Hover play */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground glow-primary">
          <Play className="h-5 w-5 translate-x-0.5 fill-current" />
        </span>
      </div>
    </button>
  )
}
