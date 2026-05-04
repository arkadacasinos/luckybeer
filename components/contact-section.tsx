import { Users, ShieldCheck, Handshake, ChevronRight, Send, Instagram } from "lucide-react"

const items = [
  {
    icon: Users,
    title: "Сообщество",
    value: "https://t.me/addlist/B9qwBlKFcuY2Ymly",
    color: "from-cyan-400 to-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "По вопросам безопасности",
    value: "luckybeargaming@mail.ru",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Handshake,
    title: "Партнёрская программа",
    value: "cooperation@luckybear.partners",
    color: "from-blue-400 to-indigo-600",
  },
]

const socials = [
  {
    name: "Telegram",
    color: "from-sky-400 to-blue-500",
    icon: <Send className="h-7 w-7 -rotate-12" />,
  },
  {
    name: "VK",
    color: "from-blue-500 to-blue-700",
    icon: <span className="font-display text-2xl font-extrabold">VK</span>,
  },
  {
    name: "X",
    color: "from-zinc-700 to-black",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    color: "from-fuchsia-500 via-rose-500 to-amber-400",
    icon: <Instagram className="h-7 w-7" />,
  },
]

export function ContactSection() {
  return (
    <section className="flex flex-col gap-4">
      <ul className="flex flex-col gap-3">
        {items.map((it) => (
          <li key={it.title}>
            <a
              href="#"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-3 transition hover:border-primary/40 hover:bg-secondary/40"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${it.color} text-white shadow-lg`}
              >
                <it.icon className="h-5 w-5" />
              </span>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="text-sm font-semibold">{it.title}</span>
                <span className="block w-full truncate text-sm text-primary underline-offset-2 hover:underline">
                  {it.value}
                </span>
              </div>
              <ChevronRight className="h-5 w-5 shrink-0 text-foreground/40 transition group-hover:text-foreground" />
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-col gap-4">
        <h3 className="text-center font-display text-base font-semibold">
          Присоединяйтесь к нашему сообществу
        </h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {socials.map((s) => (
            <button
              key={s.name}
              type="button"
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 transition hover:border-primary/40 hover:bg-secondary/40"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${s.color} text-white shadow-lg transition group-hover:scale-110`}
              >
                {s.icon}
              </span>
              <span className="text-sm font-semibold">{s.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
