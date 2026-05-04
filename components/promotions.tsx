"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react"

export function Promotions() {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/20 text-accent">
            <Trophy className="h-4 w-4" />
          </span>
          Акции
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

      <div className="grid gap-4 lg:grid-cols-2">
        <PromoCard
          src="/banners/jackpot.jpg"
          alt="Спринт удачи"
          prize="$10 000"
          title="Спринт Удачи"
          description="Розыгрыш на $10 000 каждые 15 дней"
          status="lost"
          dates="14/04/2026—29/04/2026"
        />
        <PromoCard
          src="/banners/bonus.jpg"
          alt="Еженедельный турнир"
          prize="$4 000"
          title="Еженедельный турнир"
          description="Каждую неделю — розыгрыш $4000!"
          status="active"
        />
      </div>
    </section>
  )
}

function PromoCard({
  src,
  alt,
  prize,
  title,
  description,
  status,
  dates,
}: {
  src: string
  alt: string
  prize: string
  title: string
  description: string
  status: "lost" | "active"
  dates?: string
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-[16/9]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />

        <div className="relative z-10 flex h-full flex-col justify-between p-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-background/80 px-3 py-1 text-sm font-bold text-accent backdrop-blur">
            <Trophy className="h-3.5 w-3.5" />
            {prize}
          </span>

          <div className="flex flex-col gap-2">
            <h3 className="font-display text-2xl font-extrabold text-balance md:text-3xl">
              {title}
            </h3>
            <p className="text-sm text-foreground/70">{description}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border p-4">
        {status === "lost" ? (
          <>
            <button
              type="button"
              className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground/70"
              disabled
            >
              Не выиграл приз
            </button>
            <span className="text-xs font-medium text-foreground/60">{dates}</span>
          </>
        ) : (
          <>
            <Countdown />
            <button
              type="button"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110 glow-primary"
            >
              В процессе
            </button>
          </>
        )}
      </div>
    </article>
  )
}

function Countdown() {
  const [time, setTime] = useState({ d: 6, h: 4, m: 49, s: 35 })

  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { d, h, m, s } = t
        s -= 1
        if (s < 0) {
          s = 59
          m -= 1
        }
        if (m < 0) {
          m = 59
          h -= 1
        }
        if (h < 0) {
          h = 23
          d -= 1
        }
        if (d < 0) return { d: 6, h: 4, m: 49, s: 35 }
        return { d, h, m, s }
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const Cell = ({ value }: { value: number }) => (
    <span className="flex h-9 min-w-[2.25rem] items-center justify-center rounded-lg bg-secondary px-2 font-mono text-base font-bold tabular-nums">
      {value.toString().padStart(2, "0")}
    </span>
  )

  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
        До окончания
      </span>
      <div className="flex items-center gap-1">
        <Cell value={time.d} />
        <span className="text-foreground/40">:</span>
        <Cell value={time.h} />
        <span className="text-foreground/40">:</span>
        <Cell value={time.m} />
        <span className="text-foreground/40">:</span>
        <Cell value={time.s} />
      </div>
    </div>
  )
}
