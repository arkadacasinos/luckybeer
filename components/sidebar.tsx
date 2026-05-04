"use client"

import { useState } from "react"
import {
  Home,
  Trophy,
  Gamepad2,
  Cherry,
  Spade,
  Flame,
  Tv,
  Crown,
  Gift,
  Wallet,
  User,
  ChevronDown,
  Send,
} from "lucide-react"
import { BearLogo } from "./bear-logo"
import { cn } from "@/lib/utils"

const mainNav = [
  { id: "home", label: "Главная", icon: Home },
  { id: "sport", label: "Спорт", icon: Trophy },
]

const gamesNav = [
  { id: "slots", label: "Слоты", icon: Cherry },
  { id: "fast", label: "Быстрые игры", icon: Spade },
  { id: "popular", label: "Популярные", icon: Flame },
  { id: "live", label: "Live-игры", icon: Tv },
]

const bottomNav = [
  { id: "vip", label: "VIP-партнёр", icon: Crown, badge: true },
  { id: "bonus", label: "Бонусы", icon: Gift },
  { id: "deposit", label: "Пополнить", icon: Wallet },
  { id: "profile", label: "Профиль", icon: User },
]

export function Sidebar() {
  const [active, setActive] = useState("home")
  const [gamesOpen, setGamesOpen] = useState(true)

  return (
    <aside className="hidden lg:flex sticky top-0 h-screen w-64 shrink-0 flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5">
        <BearLogo className="h-9 w-9" />
        <span className="font-display text-xl font-extrabold tracking-tight">
          LUCKY<span className="text-primary">BEAR</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-2 scrollbar-hide">
        <ul className="flex flex-col gap-1">
          {mainNav.map((item) => (
            <li key={item.id}>
              <NavButton
                icon={item.icon}
                label={item.label}
                active={active === item.id}
                onClick={() => setActive(item.id)}
              />
            </li>
          ))}

          {/* Games group */}
          <li>
            <button
              type="button"
              onClick={() => setGamesOpen((v) => !v)}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                "hover:bg-sidebar-accent",
                gamesOpen && "bg-sidebar-accent text-sidebar-accent-foreground",
              )}
            >
              <Gamepad2 className="h-5 w-5 text-primary" />
              <span className="flex-1 text-left">Игры</span>
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", gamesOpen && "rotate-180")}
              />
            </button>

            {gamesOpen && (
              <ul className="mt-1 flex flex-col gap-1">
                {gamesNav.map((item) => (
                  <li key={item.id}>
                    <NavButton
                      icon={item.icon}
                      label={item.label}
                      active={active === item.id}
                      onClick={() => setActive(item.id)}
                    />
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="my-2 border-t border-sidebar-border" />

          {bottomNav.map((item) => (
            <li key={item.id}>
              <NavButton
                icon={item.icon}
                label={item.label}
                active={active === item.id}
                onClick={() => setActive(item.id)}
                badge={item.badge}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Telegram CTA */}
      <div className="p-4">
        <button
          type="button"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 glow-primary"
        >
          <Send className="h-4 w-4" />
          Telegram
        </button>

        <div className="mt-4 flex items-center justify-center gap-3">
          <SocialIcon label="VK">
            <span className="text-xs font-bold">VK</span>
          </SocialIcon>
          <SocialIcon label="X">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </SocialIcon>
          <SocialIcon label="Instagram">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </SocialIcon>
        </div>
      </div>
    </aside>
  )
}

function NavButton({
  icon: Icon,
  label,
  active,
  onClick,
  badge,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  active?: boolean
  onClick?: () => void
  badge?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground",
      )}
    >
      <Icon className={cn("h-5 w-5", active ? "text-primary" : "text-sidebar-foreground/60")} />
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span className="absolute right-3 top-2.5 h-2 w-2 rounded-full bg-destructive" />
      )}
    </button>
  )
}

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-accent text-sidebar-foreground transition hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </button>
  )
}
