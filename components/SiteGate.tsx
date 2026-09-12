"use client";

import { useRef, useState, type FormEvent } from "react";
import { IconJ } from "./site/PvIcons";
import { PvGutter } from "./site/PvHatch";
import { unlockSite } from "@/lib/unlock-action";

// The gate is the first thing anyone sees, so it is built from the site's own
// parts rather than a separate visual language: the logo tile, the hatch bands,
// the chartreuse primary, the same hairline. No lock icon, because the mark
// already says whose door this is.
export function SiteGate() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    let ok = false;
    try {
      ok = await unlockSite(value);
    } finally {
      setSubmitting(false);
    }
    if (ok) {
      window.location.reload();
      return;
    }
    setError(true);
    setShake(true);
    window.setTimeout(() => setShake(false), 420);
    inputRef.current?.select();
  };

  return (
    <div className="pv-page pv-root fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-pv-bg px-4 py-10">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-gate-title"
        className={`relative w-full max-w-[400px] ${
          shake ? "animate-[modal-shake_0.4s_cubic-bezier(.36,.07,.19,.97)_both]" : ""
        }`}
      >
        {/* Framed the way the rest of the site is: bands across the top and
            bottom running the full width, rails down each side between them,
            and the strokes carried by the frame so the box closes at every
            corner. The bands take a border-x as well as their own border-y, so
            the outer edge carries on past them and the corners actually meet.
            The form itself has no border of its own. */}
        <PvGutter axis="x" always className="border-x" />
        <div className="flex items-stretch">
          <PvGutter axis="y" always />
          <form
            onSubmit={handleSubmit}
            className="flex min-w-0 flex-1 flex-col gap-6 px-6 py-8"
          >
            <span className="pv-primary pv-stroke pv-stroke-tile relative grid size-12 place-items-center rounded-[8px]">
              <IconJ className="size-9 text-[#252525]" />
            </span>

            <div className="flex flex-col gap-2">
              <h2
                id="site-gate-title"
                className="text-[24px] font-medium leading-[32px] text-pv-fg"
              >
                Joe Gentleman
              </h2>
              <p className="text-[16px] font-normal leading-[24px] text-pv-muted">
                Enter the password to view this portfolio.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="site-gate-input"
                className="text-[12px] font-medium uppercase leading-[16px] tracking-[0.08em] text-pv-muted"
              >
                Password
              </label>
              <input
                id="site-gate-input"
                ref={inputRef}
                type="password"
                inputMode="numeric"
                autoComplete="off"
                autoFocus
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="••••"
                aria-invalid={error}
                aria-describedby={error ? "site-gate-error" : undefined}
                className={`h-12 w-full rounded-[10px] border bg-white/[0.04] px-4 text-[16px] text-pv-fg outline-none transition-[border-color,box-shadow] duration-200 ease-smooth placeholder:text-[#6b6b6b] ${
                  error
                    ? "border-[#f87171] shadow-[0_0_0_3px_rgba(248,113,113,0.14)]"
                    : "border-pv-border focus:border-pv-accent focus:shadow-[0_0_0_3px_rgba(241,250,56,0.16)]"
                }`}
              />
              {error && (
                <p id="site-gate-error" className="text-[14px] leading-[20px] text-[#f87171]">
                  Wrong password. Try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="pv-primary pv-stroke pv-stroke-btn relative flex h-[44px] w-full shrink-0 cursor-pointer items-center justify-center rounded-[10px] px-[10px] py-2 text-[16px] font-medium leading-[24px] text-pv-bg shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] transition-[transform,box-shadow,background-image] duration-200 ease-smooth hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_10px_22px_-8px_rgba(241,250,56,0.45)] active:translate-y-0 active:duration-75 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Checking" : "Unlock"}
            </button>
          </form>
          <PvGutter axis="y" always />
        </div>
        <PvGutter axis="x" always className="border-x" />
      </div>
    </div>
  );
}
