"use client";

import { useRef, useState, type FormEvent } from "react";
import { Lock } from "@phosphor-icons/react";
import { PrimaryButton } from "./Buttons";
import { unlockSite } from "@/lib/unlock-action";

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
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-white">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-gate-title"
        className={`relative w-full max-w-[440px] rounded-[20px] bg-white border-[1.5px] border-line shadow-[0_30px_60px_-20px_rgba(13,13,13,0.28)] ${
          shake ? "animate-[modal-shake_0.4s_cubic-bezier(.36,.07,.19,.97)_both]" : ""
        }`}
      >
        <div
          aria-hidden
          className="absolute inset-0 rounded-[inherit] card-inset pointer-events-none"
        />

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-card-tint text-[#133fc8]">
            <Lock size={22} weight="regular" aria-hidden />
          </div>

          <div className="flex flex-col gap-2">
            <h2
              id="site-gate-title"
              className="text-ink text-[24px] font-medium leading-[1.2] tracking-[-0.6px]"
            >
              Joe Gentleman
            </h2>
            <p className="text-ink-muted text-[15px] leading-[1.5]">
              Enter the password to view this portfolio.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="site-gate-input"
              className="text-ink-faint text-[12px] tracking-[0.5px] uppercase font-medium"
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
              className={`h-12 w-full rounded-[12px] border-[1.5px] bg-white px-4 text-[16px] tracking-[-0.3px] text-ink placeholder:text-ink-faint outline-none transition-[border-color,box-shadow] duration-150 ${
                error
                  ? "border-[#d94747] shadow-[0_0_0_3px_rgba(217,71,71,0.12)]"
                  : "border-line focus:border-brand focus:shadow-[0_0_0_3px_rgba(39,86,232,0.15)]"
              }`}
            />
            {error && (
              <p className="text-[#d94747] text-[14px] leading-[1.4]">
                Wrong password. Try again.
              </p>
            )}
          </div>

          <div className="flex items-center justify-end pt-1">
            <PrimaryButton type="submit" className="px-5" disabled={submitting}>
              {submitting ? "Checking…" : "Unlock"}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}
