const providers = [
  "BELATRA",
  "3 OAKS",
  "TURBO GAMES",
  "NOVOMATIC",
  "THUNDERKICK",
  "SPINOMENAL",
  "ONLYPLAY",
  "VIBRA",
  "RED TIGER",
  "100HP",
  "EVOLUTION",
  "AMATIC",
  "GAMING",
  "ENDORPHINA",
  "EZUGI",
  "GALAXSYS",
  "HABANERO",
  "HACKSAW",
  "INOUT",
  "NETENT",
  "NOLIMIT",
  "PG SOFT",
  "PLAY'N GO",
  "PLAYSON",
  "PRAGMATIC",
  "RELAX",
]

export function ProvidersGrid() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-display text-base font-semibold text-foreground/80">
        Ключевые провайдеры
      </h2>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9">
        {providers.map((p) => (
          <div
            key={p}
            className="flex aspect-[3/1.4] items-center justify-center rounded-xl border border-border bg-card px-3 transition hover:border-primary/40 hover:bg-secondary/60"
          >
            <span className="font-display text-xs font-bold uppercase tracking-wider text-foreground/70">
              {p}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
