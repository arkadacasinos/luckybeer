import { Headphones } from "lucide-react"

const aboutLinks = [
  "Служба поддержки",
  "Безопасная азартная игра",
  "Политика конфид",
  "Условия и положения",
  "FAQ",
]

const currencies = [
  "Pay",
  "Visa / MC",
  "T-Pay",
  "Альфа-Банк",
  "Click",
  "Humo",
  "Qiwi",
  "Card",
  "BNB",
  "ETH",
  "Wallet Pay",
  "СБП",
  "Piastrix",
  "USDT",
  "Pay.me",
  "TRX",
  "TON",
  "Polygon",
]

export function SiteFooter() {
  return (
    <footer className="mt-8 flex flex-col gap-8 border-t border-border pt-8">
      <p className="text-center text-sm leading-relaxed text-foreground/60 text-pretty">
        LuckyBear — самое популярное казино в Telegram! Ультравыгодные бонусы за пополнение,
        безопасные и быстрые выплаты, непревзойдённый опыт! Присоединяйтесь сейчас и наслаждайтесь
        богатством! Только для пользователей старше 18 лет, играйте ответственно.
      </p>

      <div className="flex flex-col gap-4">
        <h3 className="text-center font-display text-base font-semibold">О нас</h3>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {aboutLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm text-foreground/60 transition hover:text-foreground"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-center font-display text-base font-semibold">Поддерживаемые валюты</h3>
        <div className="grid grid-cols-3 gap-2 rounded-2xl border border-border bg-card p-4 sm:grid-cols-6 lg:grid-cols-9">
          {currencies.map((c) => (
            <div
              key={c}
              className="flex h-12 items-center justify-center rounded-lg bg-secondary/50 px-3 text-xs font-bold text-foreground/70"
            >
              {c}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-4 text-center font-display text-2xl font-extrabold text-white shadow-lg">
          GCB
          <span className="ml-2 text-xs font-medium opacity-80">cert.gcb.cw</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 pb-6 text-center text-xs leading-relaxed text-foreground/50 text-pretty">
        <p>
          LuckyBear is operated by Bridge Technologies B.V., company registration number
          160264(0), with registered address at Dr. M.J. Hugenholtzweg 25, Willemstad, Curaçao.
          Bridge Technologies B.V. is licensed and authorized by the Government of Curaçao,
          operating under licence number OGL/2024/431/0231 issued by the Curaçao Gaming Control
          Board (GCB).
        </p>
        <p>
          LuckyBear имеет лицензию, выданную Кюрасаоским регулятором азартных игр (номер лицензии
          OGL/2024/431/0231).
        </p>
      </div>

      {/* Floating support */}
      <button
        type="button"
        aria-label="Поддержка"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg glow-primary transition hover:scale-110"
      >
        <Headphones className="h-5 w-5" />
      </button>
    </footer>
  )
}
