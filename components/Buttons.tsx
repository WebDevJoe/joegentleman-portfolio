import type { ComponentProps, ReactNode } from "react";

type Common = {
  children: ReactNode;
  className?: string;
};

// Hovers lift and deepen the shadow rather than filtering brightness, so the
// label and the 1px ring stay exactly as designed while the surface responds.
// Press is faster than hover so the button feels like it snaps back.
export function PrimaryButton({
  children,
  className = "",
  ...rest
}: Common & ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={`bg-cta inline-flex h-[48px] items-center justify-center rounded-[12px] px-4 font-bold text-[16px] tracking-[-0.48px] text-white shadow-[0_0_0_1px_#1742cc,0_2px_4px_0_rgba(0,0,0,0.1)] border border-[rgba(11,31,93,0)] cursor-pointer transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-px hover:shadow-[0_0_0_1px_#1742cc,0_8px_18px_-6px_rgba(19,63,200,0.5)] active:translate-y-0 active:duration-75 active:shadow-[0_0_0_1px_#1742cc,0_1px_2px_0_rgba(0,0,0,0.12)] ${className}`}
      {...rest}
    >
      <span className="leading-[0.95]">{children}</span>
    </button>
  );
}

export function ChipPill({
  active,
  children,
  className = "",
  ...rest
}: Common & { active?: boolean } & ComponentProps<"button">) {
  if (active) {
    return (
      <button
        type="button"
        className={`bg-logo-tile inline-flex h-[40px] shrink-0 items-center justify-center whitespace-nowrap rounded-[12px] px-3 font-medium text-[16px] leading-[0.9] text-white shadow-[0_0_0_1px_#201e25,0_2px_4px_0_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-px hover:shadow-[0_0_0_1px_#201e25,0_6px_14px_-6px_rgba(13,13,13,0.45)] active:translate-y-0 active:duration-75 ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`inline-flex h-[40px] shrink-0 items-center justify-center whitespace-nowrap rounded-[12px] bg-chip-bg px-3 font-medium text-[16px] leading-[0.9] text-ink shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] cursor-pointer transition-[background-color,transform,box-shadow] duration-200 ease-smooth hover:bg-[#d7d7d7] hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(13,13,13,0.2),0_6px_14px_-6px_rgba(13,13,13,0.3)] active:translate-y-0 active:bg-[#cdcdcd] active:duration-75 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
