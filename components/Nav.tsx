"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LogoTile } from "./Logo";
import { PrimaryButton } from "./Buttons";
import { SocialIcons } from "./SocialIcons";
import { DownloadIcon } from "./icons/DownloadIcon";

const EMAIL = "joegentleman2002@gmail.com";

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
                <DownloadIcon size={20} />
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

            <div className="relative flex h-full flex-col justify-between px-4 pt-10 pb-12">
              <nav className="flex flex-col items-start gap-6">
                <a
                  href="#top"
                  onClick={() => setOpen(false)}
                  className={`text-[16px] font-medium leading-[0.95] tracking-[-0.48px] text-ink underline underline-offset-4 w-fit transition-all duration-500 ease-out ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? "120ms" : "0ms" }}
                >
                  Home
                </a>
                <a
                  href="/resume.pdf"
                  onClick={() => setOpen(false)}
                  className={`inline-flex items-center gap-1 text-[16px] font-medium leading-[0.95] tracking-[-0.48px] text-ink w-fit transition-all duration-500 ease-out ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? "200ms" : "0ms" }}
                >
                  Resume
                  <DownloadIcon size={20} />
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
                    className="w-[118px]"
                  >
                    Contact
                  </PrimaryButton>
                </div>
              </nav>

              <div
                className={`transition-all duration-500 ease-out ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: open ? "360ms" : "0ms" }}
              >
                <SocialIcons />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
