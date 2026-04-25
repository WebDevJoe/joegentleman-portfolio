"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { LogoTile } from "./Logo";
import { PrimaryButton } from "./Buttons";
import { SocialIcons } from "./SocialIcons";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
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
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-[118px]"
            >
              Contact
            </PrimaryButton>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-12 w-12 items-center justify-center"
          >
            <Image
              src={open ? "/figma/icon-close.svg" : "/figma/icon-hamburger.svg"}
              alt=""
              width={48}
              height={48}
              aria-hidden
            />
          </button>
        </div>
      </header>

      {/* Mobile full-viewport menu — portaled to body to escape header's
          backdrop-filter containing block (which would clip a fixed child) */}
      {mounted && open &&
        createPortal(
          <div
            className="md:hidden"
            style={{
              position: "fixed",
              top: 96,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 40,
              background: "#ffffff",
            }}
          >
            <div className="flex flex-col gap-10 px-4 py-6">
              <div className="flex flex-col gap-6">
                <a
                  href="#top"
                  onClick={() => setOpen(false)}
                  className="text-[16px] font-medium leading-[0.95] tracking-[-0.48px] text-ink underline underline-offset-4 w-fit"
                >
                  Home
                </a>
                <a
                  href="/resume.pdf"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1 text-[16px] font-medium leading-[0.95] tracking-[-0.48px] text-ink w-fit"
                >
                  Resume
                  <Image
                    src="/figma/icon-download.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden
                  />
                </a>
              </div>
              <PrimaryButton
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }}
                className="w-[118px]"
              >
                Contact
              </PrimaryButton>
              <SocialIcons />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
