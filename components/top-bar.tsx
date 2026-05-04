"use client"

import { useState } from "react"
import { Trophy, Disc3, History, Heart, Gift, ChevronDown, Wallet, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { BearLogo } from "./bear-logo"

const tabs = [
  { id: "pool", label: "Призовой пул", icon: Trophy, color: "from-fuchsia-500 to-purple-600" },
  { id: "wheel", label: "Колесо фортуны", icon: Disc3, color: "from-orange-400 to-red-500" },
  { id: "history", label: "История", icon: History, color: "from-cyan-400 to-blue-500" },
  { id: "important", label: "Важное", icon: Heart, color: "from-sky-400 to-blue-600" },
  { id: "gift", label: "Подарок", icon: Gift, color: "from-emerald-400 to-teal-500" },
]

export function TopBar() {
  const [active, setActive] = useState("pool")

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="flex items-center gap-3 px-4 py-3 lg:px-6">
        {/* Mobile logo */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Меню"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary"
          >
            <Menu className="h-5 w-5" />
          </button>
          <BearLogo className="h-8 w-8" />
        </div>

        {/* Tabs */}
        <nav className="flex flex-1 items-center gap-2 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = active === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition lg:px-4",
                  isActive
                    ? "border-primary/30 bg-primary/10 text-foreground"
                    : "border-border bg-secondary/50 text-foreground/80 hover:bg-secondary",
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-md",
                    tab.color,
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Balance + deposit */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-2 text-sm font-semibold transition hover:bg-secondary/80"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-xs font-bold text-black">
              ₽
            </span>
            <span>295</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110 glow-primary lg:px-4"
          >
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">Пополнить</span>
          </button>
        </div>
      </div>
    </header>
  )
}
