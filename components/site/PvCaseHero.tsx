// Figma node 1189:34257. py-40, gap-40, then a two column meta row.
const HEADING_GRADIENT =
  "linear-gradient(180.2216788689649deg, rgb(255,255,255) 0.81508%, rgb(153,153,153) 111.98%)";

export function PvCaseHero({
  title,
  intro,
  role,
  status,
}: {
  title: string;
  intro: string;
  role: string;
  status: string;
}) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 border-b border-pv-border py-10 lg:gap-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[860px] shrink-0 flex-col items-start gap-2 px-4 text-center lg:gap-4 lg:px-8">
        <h1
          className="w-full bg-clip-text text-[30px] font-medium leading-[36px] text-transparent lg:text-[48px] lg:leading-[58px]"
          style={{ backgroundImage: HEADING_GRADIENT }}
        >
          {title}
        </h1>
        <p className="w-full text-[16px] font-normal leading-[24px] text-[#666] lg:text-[18px] lg:leading-[30px]">{intro}</p>
      </div>

      <div className="mx-auto flex w-full max-w-[860px] shrink-0 items-start gap-8 px-4 lg:px-8">
        <div className="flex h-[43px] min-w-px flex-1 flex-col items-start gap-1">
          <p className="whitespace-nowrap text-[12px] font-medium leading-[16px] text-pv-muted">Role</p>
          <p className="whitespace-nowrap text-[14px] font-medium leading-[20px] text-pv-fg">{role}</p>
        </div>
        <div className="flex h-[43px] min-w-px flex-1 flex-col items-start gap-1">
          <p className="w-full text-right text-[12px] font-medium leading-[16px] text-pv-muted">Status</p>
          <p className="w-full text-right text-[14px] font-medium leading-[20px] text-pv-fg">{status}</p>
        </div>
      </div>
    </section>
  );
}
