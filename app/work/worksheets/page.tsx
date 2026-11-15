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
    body: "Six years with the company, working across lots of different sites. Hours have always gone on paper or in a text to her boss, and she has never used a work app. She is fine with her phone, but has no patience for anything that feels built for someone else.",
    fear: "Pressing the wrong thing and losing her hours with no way to fix it.",
    quote: "If it takes longer than writing it on paper, what is the point?",
  },
  {
    name: "Andrew",
    role: "Business owner",
    body: "Founded the company and runs the team across client sites. Still does the payroll admin himself, late at night, in a spreadsheet he has patched together for years. A missed correction has cost him money before.",
    fear: "A mistake he will not spot until it is already a problem.",
    quote: "I need to trust the numbers without double checking everything myself.",
  },
  {
    name: "Caroline",
    role: "Payroll manager",
    body: "Runs payroll for six small businesses as a contractor, and every one of them sends her something different. She is sceptical of any new system until it proves it will not make more work for her.",
    fear: "Reformatting by hand, and corrections landing after she has started the run.",
    quote: "Give me clean numbers on time.",
  },
];

const PROCESS = [
  {
    n: "learn",
    title: "Learned how the work actually runs",
    body: "Cleaners move between client sites all day, some of them in basements and plant rooms with no signal. Before designing anything I needed to know why paper had lasted so long, because that is what the app had to beat.",
  },
  {
    n: "personas",
    title: "Three personas, three journeys",
    body: "I wrote up the cleaner, the owner and the payroll manager, and mapped each of them from first hearing about the app to relying on it. All three start sceptical, and each needs something different before they change their mind.",
  },
  {
    n: "first",
    title: "Caitlin's side first",
    body: "If the cleaners do not fill it in, Andrew has nothing to approve and Caroline has nothing to pay. The person with the least reason to care sets the bar for everything else, so her side came first.",
  },
  {
    n: "build",
    title: "Designed it by building it",
    body: "I designed the product and built it as a working app with Claude. Building it meant the awkward cases showed up while the design could still change, such as approved holiday appearing on the timesheet, or a day split across two sites. I could fix the model rather than paper over it in the interface.",
  },
];

const PRINCIPLES = [
  {
    n: "install",
    title: "Nothing to install, nothing to remember",
    body: "It is a web app opened from an invite link, so there is no app store and no update. Staff sign in with a username and a six digit PIN, not a password they will forget by the next shift.",
  },
  {
    n: "places",
    title: "Three places, all named",
    body: "Home, Timesheets and Leave. Every tab has a word under its icon, and an empty day says Add hours instead of showing a blank space.",
  },
  {
    n: "fingers",
    title: "Built for thumbs",
    body: "Full width buttons, one field height everywhere, and no native date or time pickers, because on an iPhone those open a different control from the rest of the app. Times step in quarter hours: twelve rows of minutes nobody uses became four.",
  },
  {
    n: "saved",
    title: "Saved means saved",
    body: "It works offline, so a shift logged in a basement is not lost. Every timesheet has a clear status, and nothing gets deleted without asking first. That is Caitlin's fear of losing her hours, answered directly.",
  },
];

const SMALLER = [
  {
    n: "reason",
    title: "A rejection always has a reason",
    body: "If Andrew sends something back he has to say why, and Caitlin sees it. Without that, her only way to find out is to ring the office, which is the phone call the app is meant to remove.",
  },
  {
    n: "behalf",
    title: "Honest when the office fills it in",
    body: "If someone's phone is broken, the office can enter their hours so payroll still runs on Friday. Each shift records who entered it, and the employee is told, because an admin cannot truthfully sign off someone else's week.",
  },
  {
    n: "rates",
    title: "No pay rates in the app, yet",
    body: "Holding pay rates is lawful, but until the data has proper access control and encryption, a rate is the one thing that does real harm if it leaks. Caroline enters rates in her own sheet for now.",
  },
];

const RESULTS = [
  { who: "Caitlin", label: "Time to log a full week", before: "Paper" },
  { who: "Andrew", label: "Time to collect and type up the week", before: "Photos and a spreadsheet" },
  { who: "Caroline", label: "Time to get payroll ready", before: "Reformatted by hand" },
  { who: "Andrew", label: "Corrections after submitting", before: "Chased by phone" },
];

/** A row of phone screens on a dark panel, each one opens in the lightbox. */
function Phones({ shots, onZoom }: { shots: { src: string; alt: string }[]; onZoom: Zoom }) {
  return (
    <div className="flex w-full shrink-0 items-start justify-center gap-3 border-y border-pv-border bg-[#141414] px-4 py-8 sm:gap-6 lg:gap-12 lg:py-14">
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
    right from lg, then the screens that show it. */
function Decision({
  who,
  title,
  children,
  visual,
}: {
  who: string;
  title: string;
  children: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start gap-6 lg:gap-8">
      <div className="grid w-full grid-cols-1 gap-3 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-x-16 lg:px-16">
        <div className="flex flex-col items-start gap-2">
          <p
            className="bg-clip-text text-[12px] font-medium leading-[16px] text-transparent"
            style={{ backgroundImage: ACCENT_GRADIENT }}
          >
            {who}
          </p>
          <h3 className="text-[20px] font-medium leading-[28px] text-pv-fg lg:text-[24px] lg:leading-[32px]">{title}</h3>
        </div>
        <div className="flex w-full max-w-[720px] flex-col gap-4 text-[16px] font-normal leading-[24px] text-pv-muted lg:text-[18px] lg:leading-[30px]">
          {children}
        </div>
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
        intro="Over 40 cleaners across client sites were sending in their hours as photos of paper timesheets, and the owner was typing them up late at night. I designed and built the replacement: a phone app simple enough for people who have never used a work app, and a dashboard that gives payroll a finished spreadsheet."
        meta={[
          { label: "Role", value: "Sole designer, and I built it" },
          { label: "Users", value: "Cleaners, the owner and payroll" },
          { label: "Platform", value: "Phone web app and desktop dashboard" },
          { label: "Status", value: "In user testing" },
        ]}
      />

      <PvBand />

      <PvSectionBleed eyebrow="Overview" heading="One set of hours, two very different screens">
        <div className="flex w-full shrink-0 flex-col items-start gap-6 pt-2 lg:gap-8">
          <PvPInset>
            The cleaners get a phone app with one job: get the week&apos;s hours in. The office gets
            a desktop dashboard to approve them, manage leave and export payroll. Both sides read
            from the same hours, so nothing is typed twice.
          </PvPInset>
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
            caption="The owner's dashboard: how many timesheets are in, what needs approving, hours by week and by site, and who still has to send theirs."
            natural
            onZoom={setZoom}
          />
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSection eyebrow="The problem" heading="Paper, photos and a spreadsheet nobody trusted">
        <PvBody>
          <PvP>
            The company had grown to over 40 cleaning staff, but the admin had not grown with it.
            Every week started with chasing photos of paper timesheets, working out who had not
            sent theirs, and typing everything in by hand. Holiday was worked out in a spreadsheet
            the owner did not fully trust, and one missed correction had already cost him money.
          </PvP>
          <PvP>
            The aim was to take the chasing and the retyping out of the owner&apos;s week, and give
            the payroll manager a file she does not have to touch. But all of that depends on the
            people who gain the least from it. If logging hours took a cleaner longer than paper,
            they would go back to paper.
          </PvP>
          <PvQuote>Hours of admin off the business. Seconds of effort for the people on site.</PvQuote>
        </PvBody>
      </PvSection>

      <PvBand />

      <PvSectionBleed eyebrow="Research" heading="Three people, one set of hours">
        <div className="flex w-full shrink-0 flex-col items-start gap-6 pt-2 lg:gap-8">
          <PvPInset>
            I mapped all three from first hearing about the app to relying on it. Each one starts
            sceptical for a different reason, and each decision below names the person it is for.
          </PvPInset>
          <div className="grid w-full grid-cols-1 border-y border-pv-border lg:grid-cols-3">
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
                <div className="flex flex-col items-start gap-1">
                  <p className="text-[12px] font-medium leading-[16px] text-pv-muted">Biggest worry</p>
                  <p className="text-[16px] leading-[24px] text-pv-fg">{p.fear}</p>
                </div>
                <p
                  className="mt-auto bg-clip-text pt-2 text-[18px] font-medium leading-[28px] text-transparent"
                  style={{ backgroundImage: ACCENT_GRADIENT }}
                >
                  &ldquo;{p.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="The process" heading="How I worked">
        <PvSteps steps={PROCESS} />
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Designing for Caitlin" heading="Simple enough for someone who has never used a work app">
        <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">
          <PvPInset>
            Most of the team are not confident with technology, and nobody would be trained. These
            four rules applied to every screen on the employee side.
          </PvPInset>
          <PvSteps steps={PRINCIPLES} />
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Key decisions: the employee app" heading="Five calls that make it quicker than paper">
        <div className="flex w-full shrink-0 flex-col items-start gap-14 pt-2 lg:gap-20">
          <Decision who="For Caitlin and Andrew" title="No clock in, no clock out">
            <p>
              Clocking in is what most time apps do, and in her journey map it is what Caitlin
              would pick. I still left it out. She moves between sites all day, some with no
              signal, and a clock uses her mobile data. Worst of all, the end of a long shift is
              exactly when people forget to clock out.
            </p>
            <p>
              Every missed clock out becomes a correction that Andrew has to chase. That is the same
              admin the app exists to remove, just moved to a new place. So staff log their week
              instead. The decisions below are how I made that faster than clocking in, not
              slower.
            </p>
          </Decision>

          <Decision
            who="For Caitlin"
            title="The week is the home screen"
            visual={
              <Phones
                onZoom={setZoom}
                shots={[
                  { src: "/media/ws-app-week.webp", alt: "This week: every day listed, the total, the confirmation and the submit button." },
                ]}
              />
            }
          >
            <p>
              Open the app and you are looking at this week: every day from Monday to Sunday,
              including the empty ones. A day she forgot does not disappear. It sits in the list
              saying Add hours, so it is hard to miss.
            </p>
            <p>
              One number leads, the week total, with holiday shown separately. The deadline and a
              countdown sit at the top. She ticks to confirm the hours are right, then submits, all
              on the same screen. It took six rounds to get here, starting from cards for every
              shift, which were too heavy to scan on a phone.
            </p>
          </Decision>

          <Decision
            who="For Caitlin"
            title="Reuse last week, but never blindly"
            visual={
              <Phones
                onZoom={setZoom}
                shots={[
                  { src: "/media/ws-app-reuse.webp", alt: "A new week opens with her standard week and recent weeks to start from." },
                  { src: "/media/ws-app-saved.webp", alt: "Past timesheets, with the standard week she saved." },
                ]}
              />
            }
          >
            <p>
              Most of the team work much the same shifts every week, and typing them in again is
              the quickest way to make someone give up. A new week opens by offering her standard
              week, or a recent one, with its hours shown.
            </p>
            <p>
              It never copies anything silently, because a holiday week copied forward would end up
              in someone&apos;s pay. She can open a week before using it, and the full week is
              always in front of her before she confirms it. Seeing the hours is what makes the
              confirmation mean something. Typing them again added nothing. &ldquo;Save as your
              usual week&rdquo; is offered after she submits a real week, not as setup on day one.
            </p>
          </Decision>

          <Decision
            who="For Caitlin and Caroline"
            title="Suggest the job, never guess the hours"
            visual={
              <Phones
                onZoom={setZoom}
                shots={[{ src: "/media/ws-app-log.webp", alt: "Add a shift: her usual jobs first, then the form." }]}
              />
            }
          >
            <p>
              Adding a shift starts with her usual jobs, worked out from her own history and ranked
              for the day she is logging. One tap adds the job.
            </p>
            <p>
              Times are only filled in when her history shows they never change. If they vary,
              they stay blank, because a guessed time ends up in someone&apos;s pay and Caroline is
              the one who has to fix it.
            </p>
          </Decision>

          <Decision
            who="For Caitlin and Andrew"
            title="Leave in hours, and safe from editing"
            visual={
              <Phones
                onZoom={setZoom}
                shots={[{ src: "/media/ws-app-leave.webp", alt: "Leave: hours left, request buttons and history with status." }]}
              />
            }
          >
            <p>
              Many of the team work part-time rounds, so counting holiday in days gave the wrong
              answer. Her balance is in hours, the same unit as her timesheet.
            </p>
            <p>
              Approved holiday appears on her week automatically, but she cannot edit it there.
              Changing it goes through a leave request, so approved leave cannot be quietly
              rewritten, and Andrew no longer has to work out entitlement himself.
            </p>
          </Decision>
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Key decisions: the dashboard" heading="Three calls that give the office its evenings back">
        <div className="flex w-full shrink-0 flex-col items-start gap-14 pt-2 lg:gap-20">
          <Decision
            who="For Andrew"
            title="Show what needs a person, not everything"
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
              Nobody reads nearly 50 timesheets carefully on a Monday evening. They skim and approve them
              all. So the dashboard opens on what is still missing, counted against the deadline,
              and chasing becomes a quick look rather than a job.
            </p>
            <p>
              Anything unusual gets flagged for him: a shift over twelve hours, overlapping
              shifts, work logged on a day booked off, or hours well outside that person&apos;s
              normal. That points his attention at the few sheets that need it, which is what he
              meant by trusting the numbers without checking everything himself.
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
              A normal month calendar hides the question a manager is actually asking. The leave
              view gives one row to each person who is off, with a count for each day across the
              top, so a clash is visible before he approves it.
            </p>
            <p>
              Only people with leave that month get a row. With nearly 50 staff, a row for everyone
              would mean scrolling past 40 rows of nothing.
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
              The easy option was to invent an export and let payroll adapt to it. Caroline gets a
              different format from each of her six clients, and a new one would just be one more
              to fix by hand. So the export writes her columns, in her order, in the date format
              she already uses.
            </p>
            <p>
              The money columns are live Excel formulas, so she enters a rate once and the totals
              work themselves out. Every member of staff is on the sheet, including anyone with
              zero hours, because a zero row is how she proves nobody was missed. Closing a pay
              period locks it, so the numbers she starts with are the numbers she finishes with.
            </p>
          </Decision>
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Smaller calls" heading="Details that build trust">
        <PvSteps steps={SMALLER} />
      </PvSectionBleed>

      <PvBand />

      <PvSection eyebrow="Testing" heading="Putting it in front of a new starter">
        <PvBody>
          <PvP>
            The first test was set up the way a brand new employee would see it: an empty week, no
            history, nothing to copy. In ten minutes it found four real problems.
          </PvP>
          <PvP>
            That is why the next step is more testing, not more features. Timed tasks with the team
            are under way to measure how much time it saves against paper.
          </PvP>
        </PvBody>
      </PvSection>

      <PvBand />

      <PvSectionBleed eyebrow="Results" heading="What it saves">
        <div className="flex w-full shrink-0 flex-col items-start gap-6 pt-2 lg:gap-8">
          <PvPInset>Timed tasks are in progress. These figures will be filled in once they are measured.</PvPInset>
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
