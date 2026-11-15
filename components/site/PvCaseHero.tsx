// Figma node 1189:34257. py-40, gap-40, then a two column meta row.
const HEADING_GRADIENT =
  "linear-gradient(180.2216788689649deg, rgb(255,255,255) 0.81508%, rgb(153,153,153) 111.98%)";

export function PvCaseHero({
  title,
  intro,
  role,
  status,
  meta,
}: {
  title: string;
  intro: string;
  role?: string;
  status?: string;
  /** More than two facts: a row of labelled cells, two up on a phone and all
      in one row from lg. Replaces role and status when given. */
  meta?: { label: string; value: string; href?: string }[];
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

      {meta ? (
        <dl className="mx-auto grid w-full max-w-[860px] shrink-0 grid-cols-2 gap-x-8 gap-y-5 px-4 lg:grid-cols-4 lg:px-8">
          {meta.map((m) => (
            <div key={m.label} className="flex min-w-0 flex-col items-start gap-1">
              <dt className="text-[12px] font-medium leading-[16px] text-pv-muted">{m.label}</dt>
              <dd className="text-[14px] font-medium leading-[20px] text-pv-fg">
                {m.href ? (
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(180deg, #f1fa38 0%, #faff93 100%)" }}
                  >
                    {m.value}
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-3.5 text-pv-accent transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px">
                      <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ) : (
                  m.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      ) : (
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
      )}
    </section>
  );
}
