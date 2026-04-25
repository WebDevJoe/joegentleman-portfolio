/* eslint-disable @next/next/no-img-element */

const CORNER_POSITIONS = [
  "top-[12.5px] left-[12.5px]",
  "top-[12.5px] right-[12.5px]",
  "bottom-[12.5px] left-[12.5px]",
  "bottom-[12.5px] right-[12.5px]",
] as const;

export function ShowcaseCard({
  src,
  alt,
  variant = "tinted",
}: {
  src: string;
  alt: string;
  variant?: "tinted" | "plain";
}) {
  return (
    <div className="relative shrink-0 rounded-[20px] border-[1.5px] border-line p-6 overflow-hidden">
      {/* gradient or plain background */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[20px] pointer-events-none"
        style={{ background: variant === "plain" ? "#fafafa" : "#f6fbff" }}
      />
      {/* inner top highlight */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] card-inset" />
      {/* corner dots */}
      {CORNER_POSITIONS.map((pos) => (
        <img
          key={pos}
          src="/figma/card-corner-dot.svg"
          alt=""
          width={6}
          height={6}
          aria-hidden
          className={`absolute z-[1] ${pos}`}
        />
      ))}
      {/* image */}
      <div className="relative h-[285px] w-[380px] rounded-[10px] overflow-hidden shadow-card-image">
        <img
          src={src}
          alt={alt}
          width={380}
          height={285}
          className="block h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
