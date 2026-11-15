import type { Metadata } from "next";
import { PvShell } from "@/components/site/PvShell";
import { PvBand } from "@/components/site/PvHatch";
import { HeroBoxCross, HeroCanvas, HeroEditorial } from "./variants";

// Hero explorations, side by side under the real nav and frame so each one is
// judged in place. Not linked from anywhere and kept out of search.
export const metadata: Metadata = {
  title: "Hero lab",
  robots: { index: false, follow: false },
};

const VARIANTS = [
  { key: "A", name: "Box cross", note: "Today's layout, with the Atlas box cross grid in place of the pulse field.", Hero: HeroBoxCross },
  { key: "B", name: "Editorial", note: "Left aligned and bottom heavy, with the facts set as a spec line.", Hero: HeroEditorial },
  { key: "C", name: "Canvas", note: "The hero as a Figma canvas: rulers, a selected frame and a live cursor.", Hero: HeroCanvas },
];

// ?v=b shows one variant alone, straight under the nav as it would sit live.
export default async function HeroLab({ searchParams }: { searchParams: Promise<{ v?: string }> }) {
  const { v } = await searchParams;
  const shown = VARIANTS.filter((x) => !v || x.key.toLowerCase() === v.toLowerCase());
  return (
    <PvShell>
      {shown.map(({ key, name, note, Hero }, i) => (
        <section key={key} id={`hero-${key.toLowerCase()}`}>
          {i > 0 ? <PvBand /> : null}
          {v ? null : <div className="flex items-baseline gap-3 border-b border-pv-border px-4 py-3 lg:px-8">
            <span className="text-[13px] font-medium text-pv-accent">{key}</span>
            <span className="text-[13px] font-medium text-pv-fg">{name}</span>
            <span className="hidden text-[13px] text-pv-muted sm:inline">{note}</span>
          </div>}
          <Hero />
        </section>
      ))}
    </PvShell>
  );
}
