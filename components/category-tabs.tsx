"use client"

import { useState } from "react"
import { LayoutGrid, Cherry, Spade, Flame, Tv, ChevronLeft, ChevronRight, Search, Grip } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "Все", icon: LayoutGrid },
  { id: "slots", label: "Слоты", icon: Cherry },
  { id: "fast", label: "Быстрые Игры", icon: Spade },
  { id: "popular", label: "Популярные", icon: Flame },
  { id: "live", label: "Live-Игры", icon: Tv },
]

export function CategoryTabs() {
  const [active, setActive] = useState("all")

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Назад"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground/60 transition hover:bg-secondary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((c) => {
            const Icon = c.icon
            const isActive = active === c.id
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground glow-primary"
                    : "border-border bg-secondary/50 text-foreground/80 hover:bg-secondary",
                )}
              >
                <Icon className="h-4 w-4" />
                {c.label}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          aria-label="Вперёд"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground/60 transition hover:bg-secondary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex flex-1 items-center justify-between gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium transition hover:bg-secondary lg:w-64"
        >
          <span className="flex items-center gap-2">
            <Grip className="h-4 w-4 text-foreground/60" />
            Провайдеры
          </span>
          <ChevronRight className="h-4 w-4 rotate-90 text-foreground/60" />
        </button>
        <button
          type="button"
          aria-label="Поиск"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground/60 transition hover:bg-secondary"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
