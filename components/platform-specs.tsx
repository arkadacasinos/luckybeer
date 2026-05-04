import { ShieldCheck } from "lucide-react"

const rows: { label: string; value: string }[] = [
  { label: "Название платформы", value: "Lucky Bear Casino (LuckyBear casino)" },
  { label: "Альтернативные написания", value: "лаки бир казино, лакибир казино, лаки беар казино, lucky bear казино" },
  { label: "Официальный сайт", value: "luckybear casino официальный сайт" },
  { label: "Зеркало", value: "лаки бир казино зеркало / luckybear casino зеркало" },
  { label: "Режим работы", value: "лаки бир казино онлайн — 24/7, без выходных" },
  { label: "Лицензия", value: "Curaçao Gaming Control Board, OGL/2024/431/0231" },
  { label: "Оператор", value: "Bridge Technologies B.V., рег. номер 160264(0)" },
  { label: "Год запуска", value: "2024" },
  { label: "Количество игр", value: "5000+ слотов, лайв-столов и карточных игр" },
  { label: "Провайдеры", value: "Pragmatic Play, Evolution, NetEnt, PG Soft, Belatra, Endorphina и др." },
  { label: "Минимальный депозит", value: "100 ₽" },
  { label: "Минимальный вывод", value: "500 ₽" },
  { label: "Скорость выплат", value: "от 1 минуты" },
  { label: "Приветственный бонус", value: "360% + 250 фриспинов за первые 4 депозита" },
  { label: "Поддерживаемые валюты", value: "RUB, USD, EUR, USDT, BTC, ETH, TRX, TON" },
  { label: "Способы оплаты", value: "Visa, Mastercard, СБП, Альфа-Банк, Wallet Pay, Piastrix, крипто" },
  { label: "Поддержка", value: "24/7, русский язык, Telegram + e-mail" },
  { label: "Возрастное ограничение", value: "18+" },
]

export function PlatformSpecs() {
  return (
    <section className="rounded-2xl border border-border/40 bg-card/60 p-6 lg:p-8">
      <header className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-balance lg:text-2xl">
            Характеристики платформы Lucky Bear Casino
          </h2>
          <p className="text-sm text-foreground/60">
            Полная информация о luckybear casino официальный сайт и его возможностях
          </p>
        </div>
      </header>

      <div className="overflow-hidden rounded-xl border border-border/40">
        <table className="w-full text-sm">
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-card/40" : "bg-card/20"}
              >
                <th
                  scope="row"
                  className="w-[42%] border-b border-border/30 px-4 py-3 text-left align-top font-semibold text-foreground/90 lg:w-[34%] lg:px-6"
                >
                  {row.label}
                </th>
                <td className="border-b border-border/30 px-4 py-3 align-top text-foreground/75 lg:px-6">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
