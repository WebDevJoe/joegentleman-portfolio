"use client";

import { useState } from "react";
import { ChipPill } from "./Buttons";
import { ProjectCard, type Project } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";

const categories = ["Product Design", "Game UI/UX", "Web Design"] as const;
type Category = (typeof categories)[number];

const projects: (Project & { category: Category })[] = [
  {
    category: "Product Design",
    role: "Lead UI/UX Designer",
    title: "E-Commerce Platform Redesign",
    description:
      "Complete overhaul of a retail platform, focusing on user journey optimization and conversion rate improvements through intuitive design patterns.",
    image: "https://placedog.net/610/480?id=101",
  },
  {
    category: "Product Design",
    role: "Lead UI/UX Designer",
    title: "E-Commerce Platform Redesign",
    description:
      "Complete overhaul of a retail platform, focusing on user journey optimization and conversion rate improvements through intuitive design patterns.",
    image: "https://placedog.net/610/480?id=102",
  },
  {
    category: "Product Design",
    role: "Lead UI/UX Designer",
    title: "E-Commerce Platform Redesign",
    description:
      "Complete overhaul of a retail platform, focusing on user journey optimization and conversion rate improvements through intuitive design patterns.",
    image: "https://placedog.net/610/480?id=103",
  },
  {
    category: "Game UI/UX",
    role: "Game UI Designer",
    title: "Adventure Quest HUD",
    description:
      "Designed an immersive heads-up display system for a fantasy RPG, balancing visual hierarchy with gameplay readability across multiple resolutions.",
    image: "https://placedog.net/610/480?id=201",
  },
  {
    category: "Game UI/UX",
    role: "UI/UX Designer",
    title: "Tactical Strategy Menu System",
    description:
      "Reworked the front-end menu flows for a competitive strategy title, cutting time-to-match and improving discoverability of late-game features.",
    image: "https://placedog.net/610/480?id=202",
  },
  {
    category: "Game UI/UX",
    role: "Senior UI Designer",
    title: "Open-World Inventory Overhaul",
    description:
      "Redesigned the inventory, crafting, and loot screens for an open-world RPG, focusing on controller-first ergonomics and clear item hierarchy.",
    image: "https://placedog.net/610/480?id=203",
  },
  {
    category: "Web Design",
    role: "Lead Designer",
    title: "Studio Marketing Site",
    description:
      "Created a content-rich marketing site with motion-driven storytelling, optimized for performance and accessibility on all devices.",
    image: "https://placedog.net/610/480?id=301",
  },
  {
    category: "Web Design",
    role: "Product Designer",
    title: "SaaS Onboarding Flow",
    description:
      "Designed a guided onboarding experience for a B2B SaaS, lifting activation rates with progressive disclosure and contextual education.",
    image: "https://placedog.net/610/480?id=302",
  },
  {
    category: "Web Design",
    role: "Web Designer",
    title: "Editorial Long-Form Template",
    description:
      "Built a flexible long-form article template for a publishing client, balancing typography, embedded media, and reading-progress indicators.",
    image: "https://placedog.net/610/480?id=303",
  },
];

export function MyWork() {
  const [active, setActive] = useState<Category>("Product Design");
  const filtered = projects.filter((p) => p.category === active);

  return (
    <section className="w-full px-4 md:px-12 lg:px-16 pb-12 md:pb-12 lg:pb-16">
      <div className="flex flex-col items-center justify-center gap-10 mx-auto">
        <ScrollReveal className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-ink text-[48px] font-medium leading-[0.95] tracking-[-1.44px]">
            My work
          </h2>
          <p className="text-ink-muted text-[16px] md:text-[18px] font-normal leading-[0.95] tracking-[-0.48px] md:tracking-[-0.54px]">
            A game UI/UX designer with a web development background.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-6 items-start w-full max-w-[1280px]">
          <div
            role="tablist"
            aria-label="Filter projects"
            className="flex gap-4 items-center w-full overflow-x-auto py-2 -my-2 no-scrollbar"
          >
            {categories.map((c) => (
              <ChipPill
                key={c}
                role="tab"
                aria-selected={active === c}
                active={active === c}
                onClick={() => setActive(c)}
              >
                {c}
              </ChipPill>
            ))}
          </div>

          <ScrollReveal
            key={active}
            stagger={0.12}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
          >
            {filtered.map((p, i) => (
              <ProjectCard key={`${p.title}-${i}`} project={p} />
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
