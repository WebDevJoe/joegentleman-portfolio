export function AvailableChip() {
  return (
    <div className="inline-flex items-center gap-2 rounded-[32px] bg-[rgba(49,141,217,0.2)] px-4 py-2">
      {/* Solid dot with a pulsing halo */}
      <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center">
        <span
          aria-hidden
          className="absolute inline-flex h-full w-full rounded-full bg-[#133fc8] opacity-60 animate-ping"
        />
        <span
          aria-hidden
          className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#133fc8]"
        />
      </span>
      <span className="text-[16px] font-medium leading-[0.95] tracking-[-0.48px] text-[#133fc8] whitespace-nowrap">
        Available for projects
      </span>
    </div>
  );
}
