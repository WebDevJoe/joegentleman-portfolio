import Image from "next/image";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="w-full border-t border-line bg-white">
      {/* Socials are the only thing left in this row, so they centre on mobile
          and keep their right-hand position from the wider breakpoint up. */}
      <div className="flex justify-center md:justify-end px-4 md:px-16 pt-16 pb-12">
        <SocialIcons />
      </div>

      <div className="h-px w-full bg-line" />

      <div className="flex items-center justify-between px-4 md:px-16 py-6">
        <p className="text-[14px] text-ink-faint">© 2026 JoeGentlemanUI</p>
        <div className="flex items-center gap-2">
          <Image
            src="/figma/status-dot.svg"
            alt=""
            width={6}
            height={6}
            aria-hidden
            className="animate-pulse"
          />
          <p className="text-[14px] font-medium text-ink-muted">Available for work</p>
        </div>
      </div>
    </footer>
  );
}
