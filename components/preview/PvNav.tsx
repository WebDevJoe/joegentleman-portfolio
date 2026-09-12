"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconDownload, IconJ, IconMenu } from "./PvIcons";

const EMAIL = "joegentlemanux@gmail.com";

const SOCIALS = [
  { name: "Dribbble", href: "https://dribbble.com/Joegentleman", src: "/preview/icon-dribbble.svg" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/joe-gentleman-48a648244", src: "/preview/icon-linkedin.svg" },
  { name: "X", href: "https://x.com/joegentsui", src: "/preview/icon-x.svg" },
];

// Figma node 1175:265. 361 wide, 16px padding all round, bottom hairline.
// The menu behaviour matches the live site: locked scroll, Escape to close,
// portaled out of the header so its backdrop-filter cannot clip a fixed child,
// and links staggered in. Styling is the preview palette.
export function PvNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/preview";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close on route change so a link tap does not leave the overlay up.
  useEffect(() => setOpen(false), [pathname]);

  // The menu button is hidden from md up, so a viewport crossing that line with
  // the overlay open would leave it stuck with no way back and scroll locked.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const stagger = (ms: number) =>
    ({ transitionDelay: open ? `${ms}ms` : "0ms" }) as const;

  const slide = open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0";

  return (
    <>
      <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-pv-border bg-pv-bg/80 p-4 backdrop-blur-md lg:px-8 lg:py-6">
        <Link href="/preview" aria-label="Home" className="group/logo shrink-0">
          <span className="pv-primary pv-stroke pv-stroke-tile relative grid size-12 place-items-center rounded-[8px] transition-[transform,box-shadow] duration-200 ease-smooth group-hover/logo:-translate-y-px group-hover/logo:shadow-[0_10px_22px_-8px_rgba(241,250,56,0.45)]">
            <IconJ className="size-9 text-[#252525]" />
          </span>
        </Link>

        {/* From md up there is room to lay the links out, so the menu button
            gives way to them. Same three destinations, same order. */}
        <nav className="hidden shrink-0 items-center gap-8 md:flex">
          <Link
            href="/preview"
            className="group relative text-[16px] font-medium leading-[24px] text-pv-fg"
          >
            Home
            <span
              aria-hidden
              className={`pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left bg-current transition-transform duration-300 ease-smooth ${
                isHome ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>

          <a
            href="/resume.pdf"
            download
            className="group relative inline-flex items-center gap-2 text-[16px] font-medium leading-[24px] text-pv-fg"
          >
            Resume
            <IconDownload className="size-4" />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-smooth group-hover:scale-x-100"
            />
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="pv-primary pv-stroke pv-stroke-btn relative flex h-[44px] w-[156px] items-center justify-center rounded-[10px] px-[10px] py-2 text-[16px] font-medium leading-[24px] text-pv-bg shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] transition-[transform,box-shadow,background-image] duration-200 ease-smooth hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_10px_22px_-8px_rgba(241,250,56,0.45)] active:translate-y-0 active:duration-75"
          >
            Get in touch
          </a>
        </nav>

        {/* Three bars morph into an X */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="pv-mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative -mr-2 inline-flex size-12 shrink-0 cursor-pointer items-center justify-center text-pv-muted transition-colors duration-200 ease-smooth hover:text-pv-fg md:hidden"
        >
          <span className="relative block h-12 w-6">
            <span
              className={`absolute left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-current transition-all duration-300 ease-smooth ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[18px]"
              }`}
            />
            <span
              className={`absolute left-0 right-0 mx-auto top-1/2 h-[2px] w-6 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ease-smooth ${
                open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-current transition-all duration-300 ease-smooth ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-[18px]"
              }`}
            />
          </span>
        </button>
      </header>

      {mounted &&
        createPortal(
          <div
            id="pv-mobile-menu"
            inert={!open}
            className={`pv-root fixed inset-0 z-[60] bg-pv-bg transition-opacity duration-300 ease-smooth ${
              open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {/* the same soft glow the pages carry */}
            <div aria-hidden className="pv-glow pointer-events-none absolute inset-0" />

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-4 z-10 inline-flex size-12 cursor-pointer items-center justify-center text-pv-fg  lg:right-6 lg:top-6"
            >
              <span className="relative block size-6">
                <span className="absolute left-0 top-1/2 h-[2px] w-6 -translate-y-1/2 rotate-45 rounded-full bg-current" />
                <span className="absolute left-0 top-1/2 h-[2px] w-6 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
              </span>
            </button>

            <div className="relative mx-auto flex h-full w-full max-w-[1120px] flex-col justify-between px-4 pb-12 pt-[120px] lg:px-14">
              <nav className="flex flex-col items-start gap-6">
                <Link
                  href="/preview"
                  onClick={() => setOpen(false)}
                  className={`group relative w-fit text-[18px] font-medium leading-[28px] text-pv-fg transition-all duration-500 ease-smooth ${slide}`}
                  style={stagger(120)}
                >
                  Home
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left bg-current transition-transform duration-300 ease-smooth ${
                      isHome ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>

                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className={`group relative inline-flex w-fit items-center gap-2 text-[18px] font-medium leading-[28px] text-pv-fg transition-all duration-500 ease-smooth ${slide}`}
                  style={stagger(200)}
                >
                  Resume
                  <IconDownload className="size-4" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-smooth group-hover:scale-x-100"
                  />
                </a>

                <div
                  className={`transition-all duration-500 ease-smooth ${slide}`}
                  style={stagger(280)}
                >
                  <a
                    href={`mailto:${EMAIL}`}
                    onClick={() => setOpen(false)}
                    className="pv-primary pv-stroke pv-stroke-btn relative flex h-[44px] w-[156px] items-center justify-center rounded-[10px] px-[10px] py-2 text-[16px] font-medium leading-[24px] text-pv-bg shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] transition-[transform,box-shadow,background-image] duration-200 ease-smooth hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_10px_22px_-8px_rgba(241,250,56,0.45)] active:translate-y-0 active:duration-75"
                  >
                    Get in touch
                  </a>
                </div>
              </nav>

              <div
                className={`flex flex-col gap-6 transition-all duration-500 ease-smooth ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={stagger(360)}
              >
                <div className="flex items-center gap-4">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="block size-6 shrink-0 text-[#737373] transition-[color,transform] duration-200 ease-smooth hover:-translate-y-px hover:text-pv-fg"
                    >
                      <span
                        aria-hidden
                        className="pv-social"
                        style={{ maskImage: `url("${s.src}")`, WebkitMaskImage: `url("${s.src}")` }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
