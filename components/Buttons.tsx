import type { ComponentProps, ReactNode } from "react";

type Common = {
  children: ReactNode;
  className?: string;
};

export function PrimaryButton({
  children,
  className = "",
  ...rest
}: Common & ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={`bg-cta inline-flex h-[48px] items-center justify-center rounded-[12px] px-4 font-bold text-[16px] tracking-[-0.48px] text-white shadow-[0_0_0_1px_#1742cc,0_2px_4px_0_rgba(0,0,0,0.1)] border border-[rgba(11,31,93,0)] hover:brightness-110 active:brightness-95 transition cursor-pointer ${className}`}
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
        className={`bg-logo-tile inline-flex h-[40px] items-center justify-center rounded-[12px] px-3 font-medium text-[16px] leading-[0.9] text-white shadow-[0_0_0_1px_#0d0d0d,0_2px_4px_0_rgba(0,0,0,0.1)] border border-[rgba(49,48,54,0)] cursor-pointer ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`inline-flex h-[40px] items-center justify-center rounded-[12px] bg-[#e3e3e3] px-3 font-medium text-[16px] leading-[0.9] text-ink shadow-[0_0_0_1px_rgba(13,13,13,0.16),0_2px_4px_0_rgba(0,0,0,0.1)] border border-[rgba(241,241,241,0)] cursor-pointer hover:brightness-95 transition ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
