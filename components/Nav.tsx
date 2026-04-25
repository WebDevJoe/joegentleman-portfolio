"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { LogoTile } from "./Logo";
import { PrimaryButton } from "./Buttons";
import { SocialIcons } from "./SocialIcons";

const EMAIL = "joegentleman2002@gmail.com";

type MobileLink = { label: string; href: string; icon?: string };
const MOBILE_LINKS: MobileLink[] = [
  { label: "Home", href: "#top" },
  { label: "Resume", href: "/resume.pdf", icon: "/figma/icon-download.svg" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-[24px] bg-white/60">
        <div className="flex items-center justify-between px-4 py-6 md:px-12 lg:px-16">
          <a href="#top" aria-label="Home" className="flex items-center">
            <LogoTile />
          </a>

          {/* Desktop / tablet links */}
          <nav className="hidden md:flex flex-1 items-center justify-between pl-[107px]">
            <div className="flex flex-1 items-center justify-center gap-6">
              <a
                href="#top"
                className="text-[16px] font-medium leading-[0.95] tracking-[-0.48px] text-ink underline underline-offset-4"
              >
                Home
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-1 text-[16px] font-medium leading-[0.95] tracking-[-0.48px] text-ink hover:opacity-70 transition"
              >
                Resume
                <Image
                  src="/figma/icon-download.svg"
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden
                />
              </a>
            </div>
            <PrimaryButton
              onClick={() => {
                window.location.href = `mailto:${EMAIL}`;
              }}
              className="w-[118px]"
            >
              Contact
            </PrimaryButton>
          </nav>

          {/* Animated hamburger — three bars morph into an X */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative h-12 w-12 -mr-2 inline-flex items-center justify-center"
          >
            <span className="relative block h-12 w-6">
              <span
                className={`absolute left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-ink transition-all duration-300 ease-out ${
                  open
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "top-[18px]"
                }`}
              />
              <span
                className={`absolute left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-ink top-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
                  open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-ink transition-all duration-300 ease-out ${
                  open
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-[18px]"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile full-viewport menu — portaled to body to escape header's
          backdrop-filter containing block (which would clip a fixed child) */}
      {mounted &&
        createPortal(
          <div
            aria-hidden={!open}
            className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
              open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            style={{
              background:
                "radial-gradient(120% 80% at 100% 0%, #e9f2ff 0%, #ffffff 60%)",
            }}
          >
            {/* subtle grid texture */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid opacity-40"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black, transparent 80%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black, transparent 80%)",
              }}
            />

            <div className="relative flex h-full flex-col justify-between px-6 pt-32 pb-12">
              <nav className="flex flex-col items-start gap-1">
                {MOBILE_LINKS.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group inline-flex items-center gap-3 py-3 text-ink text-[44px] font-medium leading-[1.05] tracking-[-1.5px] transition-all duration-500 ease-out ${
                      open
                        ? "translate-x-0 opacity-100"
                        : "translate-x-6 opacity-0"
                    }`}
                    style={{ transitionDelay: open ? `${120 + i * 80}ms` : "0ms" }}
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                    </span>
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt=""
                        width={28}
                        height={28}
                        aria-hidden
                        className="opacity-70"
                      />
                    )}
                  </a>
                ))}

                <a
                  href={`mailto:${EMAIL}`}
                  onClick={() => setOpen(false)}
                  className={`mt-2 inline-flex items-center gap-3 py-3 text-brand-text text-[44px] font-medium leading-[1.05] tracking-[-1.5px] transition-all duration-500 ease-out ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open
                      ? `${120 + MOBILE_LINKS.length * 80}ms`
                      : "0ms",
                  }}
                >
                  Contact
                </a>
              </nav>

              <div
                className={`flex flex-col gap-6 transition-all duration-500 ease-out ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: open
                    ? `${120 + (MOBILE_LINKS.length + 1) * 80}ms`
                    : "0ms",
                }}
              >
                <p className="text-ink-muted text-[14px] tracking-[-0.3px]">
                  Available for product design roles and freelance work.
                </p>
                <SocialIcons />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
