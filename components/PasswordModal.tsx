"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { Lock, X } from "@phosphor-icons/react";
import { PrimaryButton } from "./Buttons";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  /**
   * Async validator. Resolves true on a correct password. Should be backed by
   * a server action so the real password never reaches the client bundle.
   */
  validate: (attempt: string) => Promise<boolean>;
  title?: string;
  description?: string;
};

export function PasswordModal({
  open,
  onClose,
  onSuccess,
  validate,
  title = "Locked project",
  description = "This case study is private. Enter the password to view it.",
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setMounted(true), []);

  // Lock body scroll, autofocus the input, and wire Escape-to-close while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open, onClose]);

  // Reset transient state when the modal closes.
  useEffect(() => {
    if (!open) {
      setValue("");
      setError(false);
      setShake(false);
      setSubmitting(false);
    }
  }, [open]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    let ok = false;
    try {
      ok = await validate(value);
    } finally {
      setSubmitting(false);
    }
    if (ok) {
      onSuccess();
      onClose();
      return;
    }
    setError(true);
    setShake(true);
    window.setTimeout(() => setShake(false), 420);
    inputRef.current?.select();
  };

  if (!mounted) return null;

  return createPortal(
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] flex items-center justify-center px-4 transition-opacity duration-200 ease-out ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        type="button"
        aria-label="Close"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px] cursor-default"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pwd-modal-title"
        className={`relative w-full max-w-[440px] rounded-[20px] bg-white border-[1.5px] border-line shadow-[0_30px_60px_-20px_rgba(13,13,13,0.28)] transition-all duration-200 ease-out ${
          open ? "scale-100 translate-y-0" : "scale-95 translate-y-2"
        } ${shake ? "animate-[modal-shake_0.4s_cubic-bezier(.36,.07,.19,.97)_both]" : ""}`}
      >
        <div
          aria-hidden
          className="absolute inset-0 rounded-[inherit] card-inset pointer-events-none"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-faint hover:text-ink hover:bg-line/60 transition cursor-pointer"
        >
          <X size={16} weight="bold" aria-hidden />
        </button>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-card-tint text-[#133fc8]">
            <Lock size={22} weight="regular" aria-hidden />
          </div>

          <div className="flex flex-col gap-2">
            <h2
              id="pwd-modal-title"
              className="text-ink text-[24px] font-medium leading-[1.2] tracking-[-0.6px]"
            >
              {title}
            </h2>
            <p className="text-ink-muted text-[15px] leading-[1.5]">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="pwd-modal-input"
              className="text-ink-faint text-[12px] tracking-[0.5px] uppercase font-medium"
            >
              Password
            </label>
            <input
              id="pwd-modal-input"
              ref={inputRef}
              type="password"
              inputMode="numeric"
              autoComplete="off"
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

          <div className="flex items-center justify-end gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-12 items-center justify-center rounded-[12px] px-4 text-[16px] font-medium tracking-[-0.48px] text-ink-muted hover:text-ink transition cursor-pointer"
            >
              Cancel
            </button>
            <PrimaryButton type="submit" className="px-5" disabled={submitting}>
              {submitting ? "Checking…" : "Unlock"}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
}
