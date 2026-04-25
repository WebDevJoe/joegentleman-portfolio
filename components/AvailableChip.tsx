import Image from "next/image";

export function AvailableChip() {
  return (
    <div className="inline-flex items-center gap-2 rounded-[32px] bg-[rgba(49,141,217,0.2)] px-4 py-2">
      {/* SVG includes the soft blue glow halo around the dot */}
      <span className="relative inline-block h-4 w-4">
        <Image
          src="/figma/chip-dot.svg"
          alt=""
          fill
          aria-hidden
          className="object-contain"
          style={{ inset: "-18.75%" }}
        />
      </span>
      <span className="text-[16px] font-medium leading-[0.95] tracking-[-0.48px] text-[#133fc8] whitespace-nowrap">
        Available for projects
      </span>
    </div>
  );
}
