"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DownloadSimple } from "@phosphor-icons/react";
import { LogoTile } from "./Logo";
import { GridBackground } from "./GridBackground";
import { PrimaryButton } from "./Buttons";
import { SocialIcons } from "./SocialIcons";

const EMAIL = "joegentlemanux@gmail.com";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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
          <Link href="/#top" aria-label="Home" className="flex items-center">
            <LogoTile />
          </Link>

          {/* Desktop / tablet links */}
          <nav className="hidden md:flex flex-1 items-center justify-between pl-[107px]">
            <div className="flex flex-1 items-center justify-center gap-6">
              <Link
                href="/#top"
                className={`text-[16px] font-medium leading-[0.95] tracking-[-0.48px] text-ink transition ${
                  isHome ? "underline underline-offset-4" : "hover:opacity-70"
                }`}
              >
                Home
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1 text-[16px] font-medium leading-[0.95] tracking-[-0.48px] text-ink hover:opacity-70 transition"
              >
                Resume
                <DownloadSimple size={20} weight="regular" />
              </a>
            </div>
            <PrimaryButton
              onClick={() => {
                window.location.href = `mailto:${EMAIL}`;
              }}
              className="w-[132px]"
            >
              Get in touch
            </PrimaryButton>
          </nav>

          {/* Animated hamburger — three bars morph into an X */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
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
            id="mobile-menu"
            inert={!open}
            className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
              open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            style={{
              background:
                "radial-gradient(120% 80% at 100% 0%, #e9f2ff 0%, #ffffff 60%)",
            }}
          >
            {/* subtle grid texture */}
            <GridBackground
              className="absolute inset-0 opacity-40"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black, transparent 80%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black, transparent 80%)",
              }}
            />

            <div className="relative flex h-full flex-col justify-between px-4 pt-[120px] pb-12">
              <nav className="flex flex-col items-start gap-6">
                <Link
                  href="/#top"
                  onClick={() => setOpen(false)}
                  className={`text-[18px] font-medium leading-[0.95] tracking-[-0.54px] text-ink w-fit transition-all duration-500 ease-out ${
                    isHome ? "underline underline-offset-4" : ""
                  } ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? "120ms" : "0ms" }}
                >
                  Home
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className={`inline-flex items-center gap-1 text-[18px] font-medium leading-[0.95] tracking-[-0.54px] text-ink w-fit transition-all duration-500 ease-out ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? "200ms" : "0ms" }}
                >
                  Resume
                  <DownloadSimple size={20} weight="regular" />
                </a>
                <div
                  className={`transition-all duration-500 ease-out ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? "280ms" : "0ms" }}
                >
                  <PrimaryButton
                    onClick={() => {
                      setOpen(false);
                      window.location.href = `mailto:${EMAIL}`;
                    }}
                    className="w-[132px]"
                  >
                    Get in touch
                  </PrimaryButton>
                </div>
              </nav>

              <div
                className={`flex flex-col gap-6 transition-all duration-500 ease-out ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: open ? "360ms" : "0ms" }}
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
