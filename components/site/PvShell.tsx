import { PvBand, PvRail } from "./PvHatch";
import { PvNav } from "./PvNav";

// The frame, glow and edge rails are shared by the landing and the case study
// pages. The design is a 393 phone, so the layout never changes shape: it stays
// one column framed by hatch rails at every size.
//
// On the phone the viewport is the frame, so the rails are a fixed 16 and the
// column takes the rest. From sm up that inverts: the column takes a common
// margin for the breakpoint, 120px from lg, and the column takes what is left.
// It stops growing at 1400 so the measure does not run away on a wide monitor.
export const PV_COLUMN =
  "flex min-w-0 flex-1 flex-col xl:max-w-[1400px] [&>*]:shrink-0";

export function PvShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="pv-page relative min-h-screen w-full overflow-x-clip bg-pv-bg">
      <div className="relative z-10 flex min-h-screen justify-center">
        <PvRail side="left" />
        <main className={PV_COLUMN}>
          <PvNav />
          {children}
          <PvBand />
        </main>
        <PvRail side="right" />
      </div>
    </div>
  );
}
