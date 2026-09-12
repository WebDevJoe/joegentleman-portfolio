import { PvHero } from "@/components/site/PvHero";
import { PvNav } from "@/components/site/PvNav";
import { PvWork } from "@/components/site/PvWork";
import { PvCta } from "@/components/site/PvCta";
import { PvFooter } from "@/components/site/PvFooter";
import { PvBand, PvRail } from "@/components/site/PvHatch";
import { PV_COLUMN } from "@/components/site/PvShell";

// Figma Landing frame, 393 wide: a 16px hatch rail down each edge and a 361px
// content column between them. A 16px hatch band sits in the gap after every
// section (nodes 1175:1160, 1178:12548, 1178:12530, 1184:12657, each a 16x361
// strip rotated -90 so its real bounds are 361x16). Above sm the rails fill the
// gutters instead, see PV_COLUMN.
export default function PreviewLanding() {
  return (
    <div className="pv-page relative min-h-screen w-full overflow-x-clip bg-pv-bg">

      <div className="relative z-10 flex min-h-screen justify-center">
        <PvRail side="left" />

        <main className={PV_COLUMN}>
          <PvNav />
          <PvHero />
          <PvBand />
          <PvWork />
          <PvBand />
          <PvCta />
          <PvBand />
          <PvFooter />
          <PvBand />
        </main>

        <PvRail side="right" />
      </div>
    </div>
  );
}
