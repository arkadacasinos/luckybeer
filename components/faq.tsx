"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { faqItems } from "@/lib/faq-data"

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="rounded-2xl border border-border/40 bg-card/60 p-6 lg:p-8">
      <header className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <HelpCircle className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-balance lg:text-2xl">
            Часто задаваемые вопросы про Lucky Bear Casino
          </h2>
          <p className="text-sm text-foreground/60">
            Всё о лаки бир казино: вход, бонусы, выплаты и безопасность
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-2">
        {faqItems.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border/40 bg-card/40 transition hover:border-border/70"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left lg:px-6"
              >
                <h3 className="font-display text-sm font-semibold leading-snug text-foreground lg:text-base">
                  {item.q}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-foreground/60 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-sm leading-relaxed text-foreground/70 lg:px-6 lg:pb-6">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
