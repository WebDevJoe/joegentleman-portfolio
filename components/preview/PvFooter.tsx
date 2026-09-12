// Figma node 1184:12656. px-16 py-40, gap 10, 24px icons with a 16px gap,
// then a Bottom Row with py-12 holding the copyright.
// Glyphs are drawn as masks rather than <img> so hover can move their colour
// from the exported #737373 up to the foreground.
const SOCIALS = [
  { name: "Dribbble", href: "https://dribbble.com/Joegentleman", src: "/preview/icon-dribbble.svg" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/joe-gentleman-48a648244", src: "/preview/icon-linkedin.svg" },
  { name: "X", href: "https://x.com/joegentsui", src: "/preview/icon-x.svg" },
];

export function PvFooter() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-2.5 border-b border-pv-border px-4 py-10 lg:py-14">
      <div className="flex shrink-0 items-center gap-4">
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="block size-6 shrink-0 text-[#737373] transition-[color,transform] duration-200 ease-smooth hover:-translate-y-px hover:text-pv-fg"
          >
            <span
              aria-hidden
              className="pv-social"
              style={{ maskImage: `url("${s.src}")`, WebkitMaskImage: `url("${s.src}")` }}
            />
          </a>
        ))}
      </div>

      <div className="flex w-full shrink-0 items-center justify-center overflow-clip py-3">
        <p className="flex-1 text-center text-[14px] font-normal leading-normal text-[#999]">
          © 2026 JoeGentlemanUI
        </p>
      </div>
    </footer>
  );
}
