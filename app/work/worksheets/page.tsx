"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { PvShell } from "@/components/site/PvShell";
import { PvCaseHero } from "@/components/site/PvCaseHero";
import { PvBand } from "@/components/site/PvHatch";
import { PvFooter } from "@/components/site/PvFooter";
import {
  PvBody,
  PvFigure,
  PvP,
  PvPInset,
  PvQuote,
  PvSection,
  PvSectionBleed,
  PvSteps,
} from "@/components/site/PvProse";
import { PvLightbox, type LightboxImage } from "@/components/site/PvLightbox";
import { MEDIA_DIMS } from "@/lib/media-dims";

const NEXT_HEADING_GRADIENT =
  "linear-gradient(180.10035450598858deg, rgb(255,255,255) 0.81508%, rgb(153,153,153) 111.98%)";
const ACCENT_GRADIENT = "linear-gradient(180deg, #f1fa38 0%, #faff93 100%)";

// Every screen on this page is a capture of the working app running on its
// demo data (invented staff and sites), at 3x for the phone and 2x for the
// dashboard.

type Zoom = (img: LightboxImage) => void;

const PERSONAS = [
  {
    name: "Caitlin",
    role: "Cleaning operative",
    body: "Moves between sites and has never used a work app. Afraid of losing her hours.",
    quote: "If it takes longer than writing it on paper, what is the point?",
  },
  {
    name: "Andrew",
    role: "Business owner",
    body: "Types up everyone's hours at night. A missed correction has cost him money.",
    quote: "I need to trust the numbers without double checking everything myself.",
  },
  {
    name: "Caroline",
    role: "Payroll manager",
    body: "Runs payroll for six businesses, each in a different format.",
    quote: "Give me clean numbers on time.",
  },
];

const APPROACH = [
  {
    n: "first",
    title: "Caitlin first",
    body: "If cleaners don't fill it in, nothing else works.",
  },
  {
    n: "simple",
    title: "Simpler than paper",
    body: "No install, a PIN not a password, three labelled tabs. No training needed.",
  },
  {
    n: "build",
    title: "Designed by building it",
    body: "Edge cases surfaced while the design could still change.",
  },
];

const RESULTS = [
  { who: "Caitlin", label: "Time to log a full week", before: "Paper" },
  { who: "Andrew", label: "Time to collect and type up the week", before: "Photos and a spreadsheet" },
  { who: "Caroline", label: "Time to get payroll ready", before: "Reformatted by hand" },
  { who: "Andrew", label: "Corrections after submitting", before: "Chased by phone" },
];

/** A row of phone screens on a dark panel, each one opens in the lightbox. */
const PHONES_PANEL =
  "flex w-full shrink-0 items-start justify-center gap-3 border-y border-pv-border bg-[#141414] px-4 py-8 sm:gap-6 lg:gap-12 lg:py-14";

function Phones({
  shots,
  onZoom,
  className = PHONES_PANEL,
}: {
  shots: { src: string; alt: string }[];
  onZoom: Zoom;
  className?: string;
}) {
  return (
    <div className={className}>
      {shots.map((s) => {
        const [w, h] = MEDIA_DIMS[s.src] ?? [1179, 1977];
        return (
          <button
            key={s.src}
            type="button"
            onClick={() => onZoom({ src: s.src, alt: s.alt })}
            aria-label={`Preview: ${s.alt}`}
            className="w-full max-w-[300px] min-w-0 cursor-zoom-in overflow-hidden rounded-[18px] border border-white/10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-smooth hover:-translate-y-1 lg:rounded-[24px]"
          >
            <Image
              src={s.src}
              alt={s.alt}
              width={w}
              height={h}
              quality={90}
              sizes="(min-width: 640px) 300px, 45vw"
              className="block h-auto w-full"
            />
          </button>
        );
      })}
    </div>
  );
}

/** A decision: who it is for and the call on the left, the reasoning on the
    right from lg, then the screens that show it.

    Phone screens sit beside the text instead, in a dark panel the height of
    the row, and swap sides from one decision to the next (side). On a phone
    the text always comes first and the screens follow. */
function Decision({
  who,
  title,
  children,
  visual,
  phones,
  side = "left",
  onZoom,
}: {
  who: string;
  title: string;
  children: ReactNode;
  visual?: ReactNode;
  phones?: { src: string; alt: string }[];
  side?: "left" | "right";
  onZoom?: Zoom;
}) {
  const label = (
    <div className="flex flex-col items-start gap-2">
      <p
        className="bg-clip-text text-[12px] font-medium leading-[16px] text-transparent"
        style={{ backgroundImage: ACCENT_GRADIENT }}
      >
        {who}
      </p>
      <h3 className="text-[20px] font-medium leading-[28px] text-pv-fg lg:text-[24px] lg:leading-[32px]">{title}</h3>
    </div>
  );
  const body = (
    <div className="flex w-full max-w-[720px] flex-col gap-4 text-[16px] font-normal leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[30px]">
      {children}
    </div>
  );

  if (phones && onZoom) {
    const left = side === "left";
    return (
      <div className="grid w-full shrink-0 grid-cols-1 gap-6 pt-12 first:pt-0 lg:grid-cols-2 lg:gap-0 lg:border-b lg:border-pv-border lg:pt-0 lg:first:border-t">
        <div
          className={`flex flex-col items-start justify-center gap-3 px-4 lg:gap-5 lg:px-16 lg:py-14 ${
            left ? "lg:order-2" : ""
          }`}
        >
          {label}
          {body}
        </div>
        <div
          className={`flex items-center justify-center border-y border-pv-border bg-[#141414] px-4 py-8 lg:border-y-0 lg:px-10 lg:py-14 ${
            left ? "lg:order-1 lg:border-r" : "lg:border-l"
          }`}
        >
          <Phones
            shots={phones}
            onZoom={onZoom}
            className="flex w-full items-start justify-center gap-3 sm:gap-6 lg:gap-8"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full shrink-0 flex-col items-start gap-6 lg:gap-8">
      <div className="grid w-full grid-cols-1 gap-3 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-x-16 lg:px-16">
        {label}
        {body}
      </div>
      {visual}
    </div>
  );
}

export default function WorksheetsCaseStudy() {
  const [zoom, setZoom] = useState<LightboxImage>(null);

  return (
    <PvShell>
      <PvCaseHero
        title="Worksheets: timesheets a cleaning team will actually fill in"
        intro="Over 40 cleaners sent their hours as photos of paper timesheets, and the owner typed them up at night. I designed and built the app that replaced both."
        meta={[
          { label: "Role", value: "Sole designer, and I built it" },
          { label: "Users", value: "Cleaners, the owner and payroll" },
          { label: "Platform", value: "Phone web app and desktop dashboard" },
          { label: "Status", value: "In user testing" },
        ]}
      />

      <PvBand />

      <PvSectionBleed eyebrow="Overview" heading="One set of hours, two screens">
        <div className="flex w-full shrink-0 flex-col items-start gap-6 pt-2 lg:gap-8">
          <Phones
            onZoom={setZoom}
            shots={[
              { src: "/media/ws-app-signin.webp", alt: "Signing in with a username and a six digit PIN." },
              { src: "/media/ws-app-log.webp", alt: "Adding a shift, starting from the jobs she usually does." },
              { src: "/media/ws-app-leave.webp", alt: "Leave: holiday hours left and a one tap request." },
            ]}
          />
          <PvFigure
            src="/media/ws-dash-overview.webp"
            caption="The owner's dashboard: timesheets in, what needs approving, hours by week and by site, and who still has to send theirs."
            natural
            onZoom={setZoom}
          />
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSection eyebrow="The problem" heading="If it's slower than paper, they'll use paper">
        <PvBody>
          <PvP>
            Every week began with chasing photos of timesheets and typing them in. The fix only
            works if the cleaners use it, and they gain the least from it.
          </PvP>
          <PvQuote>Hours of admin off the business. Seconds of effort for the people on site.</PvQuote>
        </PvBody>
      </PvSection>

      <PvBand />

      <PvSectionBleed eyebrow="Research" heading="Three people, one set of hours">
        <div className="grid w-full shrink-0 grid-cols-1 border-y border-pv-border lg:grid-cols-3">
          {PERSONAS.map((p, i) => (
            <div
              key={p.name}
              className={`flex flex-col items-start gap-4 border-pv-border px-4 py-8 lg:px-10 lg:py-10 ${
                i > 0 ? "border-t lg:border-l lg:border-t-0" : ""
              }`}
            >
              <div className="flex flex-col items-start gap-1">
                <p className="text-[20px] font-medium leading-[28px] text-pv-fg lg:text-[22px] lg:leading-[30px]">{p.name}</p>
                <p className="text-[14px] font-medium leading-[20px] text-pv-muted">{p.role}</p>
              </div>
              <p className="text-[16px] leading-[24px] text-pv-muted">{p.body}</p>
              <p
                className="mt-auto bg-clip-text pt-2 text-[18px] font-medium leading-[28px] text-transparent"
                style={{ backgroundImage: ACCENT_GRADIENT }}
              >
                &ldquo;{p.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Approach" heading="Design for the person with least reason to care">
        <PvSteps steps={APPROACH} />
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Key decisions: the employee app" heading="Quicker than paper">
        <div className="flex w-full shrink-0 flex-col items-start gap-14 pt-2 lg:gap-20">
          <Decision who="For Caitlin and Andrew" title="No clock in, no clock out">
            <p>
              People forget to clock out, and some sites have no signal. Every missed punch is a
              correction for Andrew to chase, so staff log the week instead.
            </p>
          </Decision>

          <div className="flex w-full shrink-0 flex-col">
            <Decision
              who="For Caitlin"
              title="The week is the home screen"
              side="left"
              onZoom={setZoom}
              phones={[
                { src: "/media/ws-app-week.webp", alt: "This week: every day listed, including the empty ones." },
                { src: "/media/ws-app-week-total.webp", alt: "The bottom of the week: the total, the confirmation and the submit button." },
              ]}
            >
              <p>
                Every day is listed, even empty ones, so nothing is forgotten. Total, confirm and
                submit on one screen.
              </p>
            </Decision>

            <Decision
              who="For Caitlin"
              title="Reuse last week, but never blindly"
              side="right"
              onZoom={setZoom}
              phones={[
                { src: "/media/ws-app-reuse.webp", alt: "A new week opens with her standard week and recent weeks to start from." },
                { src: "/media/ws-app-saved.webp", alt: "Past timesheets, with the standard week she saved." },
              ]}
            >
              <p>
                Her usual week in one tap. She always sees the hours before confirming, so a
                holiday week never slips into her pay.
              </p>
            </Decision>

            <Decision
              who="For Caitlin and Caroline"
              title="Suggest the job, never guess the hours"
              side="left"
              onZoom={setZoom}
              phones={[{ src: "/media/ws-app-log.webp", alt: "Add a shift: her usual jobs first, then the form." }]}
            >
              <p>
                Her usual jobs come first. Times only fill in when they never change, because a
                guess ends up in someone&apos;s pay.
              </p>
            </Decision>

            <Decision
              who="For Caitlin and Andrew"
              title="Leave in hours, and safe from editing"
              side="right"
              onZoom={setZoom}
              phones={[{ src: "/media/ws-app-leave.webp", alt: "Leave: hours left, request buttons and history with status." }]}
            >
              <p>
                Part-time rounds make days meaningless. Approved holiday shows on her week but
                can&apos;t be edited there, and Andrew stops doing the maths.
              </p>
            </Decision>
          </div>
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Key decisions: the dashboard" heading="Give the office its evenings back">
        <div className="flex w-full shrink-0 flex-col items-start gap-14 pt-2 lg:gap-20">
          <Decision
            who="For Andrew"
            title="Show what needs a person"
            visual={
              <PvFigure
                src="/media/ws-dash-approvals.webp"
                caption="Approvals: leave and shift changes in one list, approved or rejected in a click."
                natural
                onZoom={setZoom}
              />
            }
          >
            <p>
              Nobody reads 50 timesheets properly on a Monday night. The dashboard shows who is
              missing and flags anything unusual.
            </p>
          </Decision>

          <Decision
            who="For Andrew"
            title="Who is off, and do I still have cover"
            visual={
              <PvFigure
                src="/media/ws-dash-leave.webp"
                caption="The team leave calendar: one row per person off, and how many are off each day."
                natural
                onZoom={setZoom}
              />
            }
          >
            <p>
              One row per person off, with a daily count, so a clash shows before he approves
              it.
            </p>
          </Decision>

          <Decision
            who="For Caroline"
            title="Her spreadsheet, not a new format"
            visual={
              <PvFigure
                src="/media/ws-dash-export.webp"
                caption="Export: pick the pay week, approved timesheets only, and every person's hours ready for the payroll sheet."
                natural
                onZoom={setZoom}
              />
            }
          >
            <p>
              The export matches the sheet she already keeps, column for column. Nothing to
              reformat, and a closed period is locked.
            </p>
          </Decision>
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Results" heading="What it saves">
        <div className="flex w-full shrink-0 flex-col items-start gap-6 pt-2 lg:gap-8">
          <PvPInset>
            The first test with a new starter found four problems in ten minutes. Timed tasks are
            under way.
          </PvPInset>
          <div className="grid w-full grid-cols-1 border-y border-pv-border sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS.map((r, i) => (
              <div
                key={r.label}
                className={`flex flex-col items-start gap-3 border-pv-border px-4 py-6 lg:px-8 lg:py-8 ${
                  i > 0 ? "border-t sm:border-t-0" : ""
                } ${i % 2 === 1 ? "sm:border-l" : ""} ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
              >
                <p className="text-[12px] font-medium leading-[16px] text-pv-muted">For {r.who}</p>
                <p className="text-[16px] font-medium leading-[24px] text-pv-fg lg:min-h-[48px]">{r.label}</p>
                <p
                  className="bg-clip-text text-[40px] font-medium leading-[44px] text-transparent lg:text-[48px] lg:leading-[52px]"
                  style={{ backgroundImage: ACCENT_GRADIENT }}
                >
                  TBC
                </p>
                <p className="text-[14px] leading-[20px] text-pv-muted">Before: {r.before}</p>
              </div>
            ))}
          </div>
        </div>
      </PvSectionBleed>

      <PvBand />

      <section className="flex w-full flex-col items-center border-b border-pv-border px-4 py-10 lg:py-16">
        <div className="flex shrink-0 flex-col items-center gap-6">
          <div className="flex shrink-0 flex-col items-center gap-3">
            <p className="whitespace-nowrap text-[12px] font-medium leading-[16px] text-pv-muted">
              Next Project
            </p>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <p
                className="w-full max-w-[323px] bg-clip-text text-center text-[24px] font-medium leading-[32px] text-transparent lg:max-w-[560px] lg:text-[34px] lg:leading-[44px]"
                style={{ backgroundImage: NEXT_HEADING_GRADIENT }}
              >
                Growth Fund and Store Bundles
              </p>
              <p className="w-full max-w-[297px] text-center text-[14px] font-normal leading-[17.5px] text-[#666] lg:max-w-[520px] lg:text-[16px] lg:leading-[24px]">
                A growth fund monetisation feature, shipped inside two live App Store games.
              </p>
            </div>
          </div>
          <Link
            href="/work/growth-fund-store"
            className="pv-primary pv-stroke pv-stroke-btn relative flex h-[44px] w-[156px] shrink-0 items-center justify-center gap-2 rounded-[10px] px-[10px] py-2 text-[16px] font-medium leading-[24px] text-pv-bg shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] transition-[transform,box-shadow,background-image] duration-200 ease-smooth hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_10px_22px_-8px_rgba(241,250,56,0.45)] active:translate-y-0 active:duration-75"
          >
            View Project
          </Link>
        </div>
      </section>

      <PvBand />

      <PvFooter />

      <PvLightbox image={zoom} onClose={() => setZoom(null)} />
    </PvShell>
  );
}
