import { Cherry, Spade, Flame } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { PromoBanners } from "@/components/promo-banners"
import { CategoryTabs } from "@/components/category-tabs"
import { GameGrid, type Game } from "@/components/game-grid"
import { LiveGames } from "@/components/live-games"
import { Promotions } from "@/components/promotions"
import { ProvidersGrid } from "@/components/providers-grid"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { SeoContent } from "@/components/seo-content"
import { PlatformSpecs } from "@/components/platform-specs"
import { Faq } from "@/components/faq"

const slots: Game[] = [
  { id: "s1", title: "Anubis Wrath", provider: "PGSOFT", src: "/games/anubis.jpg" },
  { id: "s2", title: "Wild Bounty Showdown", provider: "PGSOFT", src: "/games/cowgirl.jpg" },
  { id: "s3", title: "Crown Coins", provider: "ENDORPHINA", src: "/games/crown.jpg" },
  { id: "s4", title: "Speed Winner", provider: "PGSOFT", src: "/games/speed.jpg" },
  { id: "s5", title: "Mummyland Treasures", provider: "BELATRA", src: "/games/mummy.jpg" },
  { id: "s6", title: "Treasures of Aztec", provider: "PGSOFT", src: "/games/aztec.jpg" },
  { id: "s7", title: "Blast the Bass", provider: "BELATRA", src: "/games/blast.jpg" },
  { id: "s8", title: "Gemstones Gold", provider: "PGSOFT", src: "/games/gems.jpg" },
]

const fast: Game[] = [
  { id: "f1", title: "Tower Rush", provider: "GALAXSYS", src: "/games/tower.jpg" },
  { id: "f2", title: "Mine Slot", provider: "INOUT", src: "/games/anubis.jpg" },
  { id: "f3", title: "Aviamasters 2", provider: "BGAMING", src: "/games/aviator.jpg" },
  { id: "f4", title: "Mines", provider: "100HP GAMING", src: "/games/mines.jpg" },
  { id: "f5", title: "Turbo Mines", provider: "TURBO GAMES", src: "/games/mines.jpg" },
  { id: "f6", title: "Blackjack", provider: "GALAXSYS", src: "/games/blackjack.jpg" },
  { id: "f7", title: "Chicken vs Train", provider: "100HP", src: "/games/aviator.jpg" },
  { id: "f8", title: "Crash X", provider: "TURBO GAMES", src: "/games/crash.jpg" },
]

const popular: Game[] = [
  { id: "p1", title: "Anubis Wrath", provider: "PGSOFT", src: "/games/anubis.jpg" },
  { id: "p2", title: "Wild Bounty Showdown", provider: "PGSOFT", src: "/games/cowgirl.jpg" },
  { id: "p3", title: "Crown Coins", provider: "ENDORPHINA", src: "/games/crown.jpg" },
  { id: "p4", title: "Speed Winner", provider: "PGSOFT", src: "/games/speed.jpg" },
  { id: "p5", title: "Mummyland Treasures", provider: "BELATRA", src: "/games/mummy.jpg" },
  { id: "p6", title: "Treasures of Aztec", provider: "PGSOFT", src: "/games/aztec.jpg" },
  { id: "p7", title: "Blast the Bass", provider: "BELATRA", src: "/games/blast.jpg" },
  { id: "p8", title: "Gemstones Gold", provider: "PGSOFT", src: "/games/gems.jpg" },
]

export default function Page() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />

        <main className="flex-1 px-4 py-6 lg:px-8">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-8">
            <PromoBanners />
            <CategoryTabs />

            <GameGrid
              title="Слоты"
              icon={<Cherry className="h-4 w-4" />}
              games={slots}
            />

            <GameGrid
              title="Быстрые игры"
              icon={<Spade className="h-4 w-4" />}
              games={fast}
            />

            <GameGrid
              title="Популярные"
              icon={<Flame className="h-4 w-4" />}
              games={popular}
            />

            <LiveGames />

            <Promotions />

            <ProvidersGrid />

            <ContactSection />

            <PlatformSpecs />

            <Faq />

            <SiteFooter />
          </div>
        </main>
      </div>

      <SeoContent />
    </div>
  )
}
