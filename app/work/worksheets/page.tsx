"use client";

import { useState } from "react";
import Link from "next/link";
import { PvShell } from "@/components/site/PvShell";
import { PvCaseHero } from "@/components/site/PvCaseHero";
import { PvBand } from "@/components/site/PvHatch";
import { PvFooter } from "@/components/site/PvFooter";
import {
  PvBody,
  PvFigure,
  PvFigureSlot,
  PvP,
  PvPainPoints,
  PvPInset,
  PvQuote,
  PvSection,
  PvSectionBleed,
  PvSteps,
} from "@/components/site/PvProse";
import { PvLightbox, type LightboxImage } from "@/components/site/PvLightbox";

const NEXT_HEADING_GRADIENT =
  "linear-gradient(180.10035450598858deg, rgb(255,255,255) 0.81508%, rgb(153,153,153) 111.98%)";
const ACCENT_GRADIENT = "linear-gradient(180deg, #f1fa38 0%, #faff93 100%)";

const PROCESS = [
  {
    n: "01",
    title: "Learned how the work actually runs",
    body: "Cleaning staff move between client sites all day. Hours went in on a paper sheet at the end of the week, or by text when someone forgot. Before designing anything I needed to understand why that persisted, and what a replacement would have to beat.",
  },
  {
    n: "02",
    title: "Built three personas and their journeys",
    body: "The owner, the payroll manager and the cleaning operative want different things from the same data. I wrote each one up with their goals, frustrations and emotional arc from first hearing about the app through to relying on it, so I could design for the person rather than the screen.",
  },
  {
    n: "03",
    title: "Designed the employee side first",
    body: "The whole system fails if staff do not fill it in, so the hardest constraint set the starting point: seconds to complete, no training, and no way to lose your hours by pressing the wrong thing.",
  },
  {
    n: "04",
    title: "Designed and built it",
    body: "I designed the product and built it as a working application using Claude. Designing and implementing the same thing meant edge cases surfaced while there was still time to change the design rather than work around it.",
  },
];

const PERSONAS = [
  {
    n: "01",
    name: "Andrew Clark, Business Owner",
    body: "Founded the company twelve years ago and runs 40 cleaning staff across client sites. Still does payroll admin himself late at night on a spreadsheet he has patched together for years. He was once caught out by a missed timesheet correction that cost him money, so he is cautious about handing over control without visibility.",
    quote: "I need to trust the numbers without double-checking everything myself.",
    src: "/media/ws-persona-andrew.webp",
  },
  {
    n: "02",
    name: "Caroline Jones, Payroll Manager",
    body: "Runs payroll for six small businesses as a contractor. She has seen every possible way a business can track time badly, and is sceptical of any new system until it proves it will not create more work for her. Her constraint is the sharpest in the project: the export has to be clean enough to need no manual reformatting.",
    quote: "Give me clean numbers on time.",
    src: "/media/ws-persona-caroline.webp",
  },
  {
    n: "03",
    name: "Caitlin Banks, Cleaning Operative",
    body: "Six years with the company, across many different sites, and has never used a work app. Hours have always gone on a paper sheet or a text to her boss. She is not bad with phones, but she has no patience for anything that feels built for someone else. Her fear is pressing the wrong thing and losing her hours with no way to fix it.",
    quote: "If it takes longer than writing it on paper, what is the point?",
    src: "/media/ws-persona-caitlin.webp",
  },
];

const JOURNEYS = [
  {
    src: "/media/ws-journey-caitlin.webp",
    caption:
      "Caitlin's journey, from sceptical at the team briefing through to logging every shift without thinking about it.",
  },
  {
    src: "/media/ws-journey-andrew.webp",
    caption:
      "Andrew's journey, from a spreadsheet that stopped scaling to trusting the numbers without a backup copy.",
  },
  {
    src: "/media/ws-journey-caroline.webp",
    caption:
      "Caroline's journey, from another format to learn to her easiest client of the six.",
  },
];

const DECISIONS = [
  {
    n: "01",
    title: "Timesheets, not clock in and clock out",
    body: "Caitlin's journey pointed the other way. She clocks in with one tap and clocks out at the end, and on her side of it that is plainly the better experience. It is what I mapped, because it is what she would choose. I made the call to keep timesheets anyway. Staff are at different sites all day and some have no signal when they arrive, so a clock puts the one moment that must not fail on the one thing that is not reliable. Every failure becomes an edit request, and fewer edit requests was exactly what the business had asked for. Her own journey predicts the failure: a missed clock out at the end of a long shift, and Andrew chasing it in his. It made the employee side harder and I accepted that. Copy last week and saved templates are how I paid it back, so the usual week is still close to one action, with no clock to miss.",
  },
  {
    n: "02",
    title: "A PIN to log in, not a password",
    body: "Caitlin opens the app between jobs, standing up, often in a hurry. A password is a barrier at exactly the wrong moment. A PIN gets her in fast enough that logging hours stays a seconds-long task rather than a chore she puts off until the end of the week.",
  },
  {
    n: "03",
    title: "Copy last week, and save a template",
    body: "The hardest part of the employee side was catering for everyone at once. Most staff work broadly the same shifts week to week, and retyping them is the fastest way to make someone give up. Copying a week turns the common case into one action, and a saved template covers anyone on a repeating pattern that is not simply last week. Both stay fully editable for the weeks that do not match.",
  },
  {
    n: "04",
    title: "A day is a day, even across two jobs",
    body: "Someone cleaning two sites in one day has worked one day, not two. The obvious way to count gets that wrong, and it would quietly misreport working days on a payroll export that Caroline has to trust. Getting this right mattered more than anything on screen.",
  },
  {
    n: "05",
    title: "The export matches the spreadsheet they already use",
    body: "The obvious move is to define your own export format and let payroll adapt to it. Caroline works across six clients and every one of them hands her something different, so a new format would just be one more thing to reformat by hand. The export writes into the Excel layout this business already uses, which means it drops straight into the payroll run with nothing re-keyed. The manual entry that used to start every week is removed rather than moved somewhere else.",
  },
  {
    n: "06",
    title: "Closing a pay period asks, it does not tell",
    body: "Closing a period over unapproved sheets is the one action that cannot be undone. It confirms in a modal rather than a toast. Friction is usually the enemy, but here it is the point: this is the moment where being slowed down is worth more than being fast.",
  },
];

export default function WorksheetsCaseStudy() {
  const [zoom, setZoom] = useState<LightboxImage>(null);

  return (
    <PvShell>
      <PvCaseHero
        title="A time and attendance product for a cleaning contractor in Moray"
        intro="40 cleaning staff across client sites, with hours arriving every week as photos of paper timesheets. The owner was still gathering them and typing them up himself late at night. I designed the product around the three people who touch it, then built it."
        role="UX designer"
        status="In user testing"
      />

      <PvBand />

      <PvSectionBleed eyebrow="Overview" heading="One product, three very different people">
        <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">
          <PvFigure
            src="/media/worksheets-dashboard.webp"
            caption="The owner's dashboard: the pay period at a glance, what is still to come in, and where the hours went by site."
            natural
            onZoom={setZoom}
          />
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSection
        eyebrow="The brief"
        heading="The spreadsheet worked, right up until it did not"
      >
        <PvBody>
          <PvP>
            The company had grown to 40 cleaning staff across multiple client sites, and the admin
            had not grown with it. Staff filled in a paper timesheet and sent a photo of it. Every
            week started with chasing down images from 40 people, working out who had not sent
            theirs, then typing all of it in by hand. Holiday entitlement was worked out in a
            spreadsheet the owner was not confident in, and a single missed correction had already
            cost him money once.
          </PvP>
          <PvP>
            The goal was to streamline the whole cycle: strip the gathering and the retyping out of
            the owner's week, and hand the payroll manager a file she does not have to touch. The
            catch is that all of that depends on the people least served by it. The product had to
            save the business hours without costing a cleaner more than seconds.
          </PvP>
          <PvQuote>
            Hours of admin off the business. Seconds of effort for the people on site.
          </PvQuote>
        </PvBody>
      </PvSection>

      <PvBand />

      <PvSectionBleed eyebrow="Research" heading="Who I was designing for">
        <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">
          <PvPInset>
            I wrote up three personas and mapped each one from first hearing about the app through
            to relying on it. Putting their emotional state on the same axis made the real problem
            obvious: all three start sceptical, and each one needs a different thing to move.
          </PvPInset>

          {PERSONAS.map((p) => (
            <div key={p.n} className="flex w-full shrink-0 flex-col items-start gap-4">
              <div className="flex w-full max-w-[820px] flex-col items-start gap-1.5 px-4 lg:px-16">
                <p
                  className="whitespace-nowrap bg-clip-text text-[14px] font-medium leading-[20px] text-transparent"
                  style={{ backgroundImage: ACCENT_GRADIENT }}
                >
                  {p.n}
                </p>
                <p className="text-[20px] font-medium leading-[28px] text-pv-fg lg:text-[24px] lg:leading-[32px]">{p.name}</p>
              </div>
              <PvPInset>{p.body}</PvPInset>
              <div className="w-full px-4">
                <PvQuote>{p.quote}</PvQuote>
              </div>
              <PvFigure src={p.src} caption={`${p.name} persona.`} natural onZoom={setZoom} />
            </div>
          ))}
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Research" heading="Mapping each journey end to end">
        <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">
          <PvPInset>
            Five stages each, from awareness through to retention, with what they do, what they
            think, where it hurts and what the opportunity is. The pain points are what the design
            had to answer.
          </PvPInset>
          <PvPInset>
            One of them the product deliberately does not answer. Caitlin&apos;s journey has her
            clocking in and out, because that is what she would choose. The business could not
            carry it. That trade off is the first of the decisions below.
          </PvPInset>
          {JOURNEYS.map((j) => (
            <PvFigure key={j.src} src={j.src} caption={j.caption} natural onZoom={setZoom} />
          ))}
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Research into design" heading="Every pain point, and what answers it">
        <div className="flex w-full shrink-0 flex-col items-start gap-8 pt-2">
          <PvPInset>
            The personas and journeys were only worth making if they changed the product. These are
            the frustrations each of the three named, and the thing in the build that answers each
            one.
          </PvPInset>

          <PvPainPoints
            who="Caitlin, cleaning operative"
            rows={[
              {
                pain: "Anything buried under menus or multiple taps to do one simple thing.",
                fix: "A PIN gets her in, and the current week is the first thing on screen. Copy last week, or a saved template, turns the usual week into a single action.",
              },
              {
                pain: "Small text, unclear icons, anything she has to squint at.",
                fix: "One field height across the whole product and full width controls sized for a thumb rather than a cursor.",
              },
              {
                pain: "Fear of pressing the wrong thing and losing her hours with no way to fix it.",
                fix: "Nothing destructive happens without confirming first, and a submitted sheet can be queried rather than quietly disappearing.",
              },
              {
                pain: "No clear confirmation her hours were saved, the exact fear she started with.",
                fix: "Submitting moves the sheet into an explicit state she can see, so saved is something shown rather than assumed.",
              },
            ]}
          />

          <PvPainPoints
            who="Andrew, business owner"
            rows={[
              {
                pain: "Chasing staff for missing or late timesheets.",
                fix: "The dashboard opens on who has still to send theirs, counted against the deadline, so chasing is a glance instead of a job.",
              },
              {
                pain: "Manually calculating holiday entitlement in a spreadsheet he is not confident in.",
                fix: "Leave balances are worked out by the system and shown next to the request they belong to, so the maths is not his to redo.",
              },
              {
                pain: "Worrying about a compliance mistake he will not spot until it is a problem.",
                fix: "Every sheet carries an explicit state, and closing a pay period over unapproved sheets stops to confirm rather than letting it through.",
              },
              {
                pain: "Worried switching systems will just create more admin in the short term.",
                fix: "Mobile web and an invite link, so there is nothing for 40 people to install and onboarding is not a rollout.",
              },
            ]}
          />

          <PvPainPoints
            who="Caroline, payroll manager"
            rows={[
              {
                pain: "Inconsistent formats between clients, forcing her to reformat data by hand.",
                fix: "The export writes into the Excel format this business already uses, so there is nothing to reformat and nothing to re-key.",
              },
              {
                pain: "Last minute corrections landing after she has already started a run.",
                fix: "Closing the period locks it, so the numbers she starts with are the numbers she finishes with.",
              },
              {
                pain: "Unclear overtime and holiday calculations she has to double check herself.",
                fix: "Hours break down by site and by kind, worked against holiday, so a total can be traced rather than taken on trust.",
              },
            ]}
          />
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="The Process" heading="How I worked">
        <PvSteps steps={PROCESS} />
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="Key Decisions" heading="Six calls that shaped it">
        <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">
          {DECISIONS.map((d) => (
            <div key={d.n} className="flex w-full shrink-0 flex-col items-start gap-4">
              <div className="flex w-full max-w-[820px] flex-col items-start gap-1.5 px-4 lg:px-16">
                <p
                  className="whitespace-nowrap bg-clip-text text-[14px] font-medium leading-[20px] text-transparent"
                  style={{ backgroundImage: ACCENT_GRADIENT }}
                >
                  {d.n}
                </p>
                <p className="text-[20px] font-medium leading-[28px] text-pv-fg lg:text-[24px] lg:leading-[32px]">{d.title}</p>
              </div>
              <PvPInset>{d.body}</PvPInset>
            </div>
          ))}
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSectionBleed eyebrow="The design" heading="What it looks like">
        <div className="flex w-full shrink-0 flex-col items-start gap-4 pt-2">
          <PvPInset>
            The employee side runs on mobile web, so there is nothing to install and nothing to
            update. The owner and the payroll manager work on desktop, where the density is
            useful rather than punishing.
          </PvPInset>

          <PvFigureSlot label="PIN login" height={300} />
          <PvFigureSlot label="Logging hours for the week" height={300} />
          <PvFigureSlot label="Copy last week" height={300} />
          <PvFigureSlot label="Booking a day off and the holiday balance" height={300} />
          <PvFigureSlot label="Approvals: timesheets, leave and shift changes" height={240} />
          <PvFigureSlot label="Closing a pay period and the payroll export" height={240} />
        </div>
      </PvSectionBleed>

      <PvBand />

      <PvSection eyebrow="Outcome" heading="Where it stands">
        <PvBody>
          <PvP>
            The product is complete and about to go into user testing with the team it was built
            for. That is the honest status: the decisions here are backed by research and by
            understanding the domain, not yet by usage.
          </PvP>
          <PvP>
            Once it is in daily use I am going to measure the thing that actually matters, which is
            how much time it gives the payroll manager back against the spreadsheet it replaced.
            That is the number worth having, and it is the one I did not have when I made these
            decisions.
          </PvP>
          <PvP>
            Designing and building it was the difference. Edge cases like counting a day worked
            across two sites only surface once you have to implement them, and finding them while
            the design was still moving meant fixing the model rather than patching the interface.
          </PvP>
        </PvBody>
      </PvSection>

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
